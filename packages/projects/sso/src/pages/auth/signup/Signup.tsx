import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import core from 'src/services/core';

import { Handle, Validator, Fragment, FormGroup, FormControl, Toast, useToast } from '@client/ui';

import './Signup.scss';

function Signup() {
    const navigate = useNavigate();
    const toastService = useToast();

    const [IS_LOADING, SET_IS_LOADING] = useState(false);

    useEffect(() => { document.title = 'Cadastrar'; }, []);

    const handle: Handle<Fragment.SSO.SIGNUP.IForm> = {
        submit: (form) => {
            SET_IS_LOADING(true);
            core.sso.signUp(form.values.email, form.values.password)
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

    const validator: Validator<Fragment.SSO.SIGNUP.IForm> = {
        password: (form) => {
            const { password, confirmPassword } = form.values;

            if (password && (confirmPassword !== password)) {
                form.controls.confirmPassword.error = 'As senhas devem ser iguais';
            } else {
                form.controls.confirmPassword.error = '';
            }
        }
    };

    const formGroup = new FormGroup<Fragment.SSO.SIGNUP.IForm>({
        firstName: new FormControl({ value: 'Leonardo', required: true }),
        lastName: new FormControl({ value: 'Gonçalves', required: true }),
        email: new FormControl({ value: 'leo@mymagicchat.com', type: 'email', required: true }),
        password: new FormControl({ value: 'Testando4', type: 'password', required: true }),
        confirmPassword: new FormControl({ value: 'Testando4', type: 'password', required: true })
    }, handle, validator);

    const goToSignin = () => navigate('/', { replace: false });

    const signinWithGoogle = () => console.log('signinWithGoogle');

    return (
        <Fragment.SSO.Signup
            formGroup={formGroup}
            goToSignin={goToSignin}
            signinWithGoogle={signinWithGoogle}
            isLoading={IS_LOADING}
        />
    );
}

export default Signup;
