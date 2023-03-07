import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import core from 'src/services/core';

import { Pages, FormGroup, FormControl, Handle, Toast, useToast } from '@client/ui';

import './Signin.scss';

function Signin() {
    const navigate = useNavigate();
    const toastService = useToast();

    const [IS_LOADING, SET_IS_LOADING] = useState<boolean>(false);
    const [IS_LOADING_GOOGLE] = useState<boolean>(false);

    useEffect(() => { document.title = 'Entrar'; }, []);

    const handle: Handle<Pages.SSO.SIGNIN.IForm> = {
        submit: async (form) => {
            SET_IS_LOADING(true);            
            core.sso.signIn(form.values.email, form.values.password)
                .then(() => goToPlatform())
                .catch(e => { setToast(e.message); })
                .finally(() => SET_IS_LOADING(false));
        }
    };

    const formGroup = new FormGroup<Pages.SSO.SIGNIN.IForm>({
        email: new FormControl({ value: 'leo@mymagicchat.com', type: 'email', required: true }),
        password: new FormControl({ value: 'Testando4', type: 'password', required: true }),
        remember: new FormControl({ value: false }),
    }, handle);

    const createAccount = () => navigate('/signup', { replace: false });
    const forgotPassword = () => navigate('/forgot', { replace: false });

    const signinWithGoogle = async () => {
        core.sso.signInWithGoogle()
            .then(() => goToPlatform())
            .catch(e => { setToast(e.message); });
    };

    const goToPlatform = () => {
        window.location.href = core.environment.url.manager;
    };

    const setToast = (message: string) => {
        const toast = new Toast({
            show: true,
            mode: 'danger',
            autoClose: true,
            description: message,
            title: 'Tivemos um problema',
        });

        toastService.add(toast);
    };

    return (
        <Pages.SSO.Signin
            formGroup={formGroup}
            goToCreate={createAccount}
            forgotPassword={forgotPassword}
            signinWithGoogle={signinWithGoogle}
            loading={{ signin: IS_LOADING, google: IS_LOADING_GOOGLE }}
        />
    );
}

export default Signin;
