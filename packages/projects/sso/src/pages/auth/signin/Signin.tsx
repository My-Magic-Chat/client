import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import core from 'src/services/core';

import { Fragment, FormGroup, FormControl, Handle, Toast, useToast } from '@client/ui';

import './Signin.scss';

function Signin() {
    const navigate = useNavigate();
    const toastService = useToast();

    const [IS_LOADING, SET_IS_LOADING] = useState<boolean>(false);
    const [IS_LOADING_GOOGLE, SET_IS_LOADING_GOOGLE] = useState<boolean>(false);

    useEffect(() => { document.title = 'Entrar'; }, []);

    const handle: Handle<Fragment.SSO.SIGNIN.IForm> = {
        submit: async (form) => {
            SET_IS_LOADING(true);
            core.sso.signIn(form.values.email, form.values.password)
                .then(r => console.log('result', r))
                .catch(e => {
                    const toast = new Toast({
                        show: true,
                        mode: 'danger',
                        autoClose: true,
                        description: e.message,
                        title: 'Tivemos um problema',
                    });

                    toastService.add(toast);
                })
                .finally(() => SET_IS_LOADING(false));
        }
    };

    const formGroup = new FormGroup<Fragment.SSO.SIGNIN.IForm>({
        email: new FormControl({ value: '', type: 'email', required: true }),
        password: new FormControl({ value: '', type: 'password', required: true }),
        remember: new FormControl({ value: false }),
    }, handle);

    const createAccount = () => navigate('/signup', { replace: false });
    const forgotPassword = () => navigate('/forgot', { replace: false });

    const signinWithGoogle = () => console.log('signinWithGoogle');

    return (
        <Fragment.SSO.Signin
            formGroup={formGroup}
            goToCreate={createAccount}
            forgotPassword={forgotPassword}
            signinWithGoogle={signinWithGoogle}
            loading={{ signin: IS_LOADING, google: IS_LOADING_GOOGLE }}
        />
    );
}

export default Signin;
