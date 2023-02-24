import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { Handle, Validator, Fragment, FormGroup, FormControl } from '@client/ui';

import './Signup.scss';

function Signup() {
    const navigate = useNavigate();
    const [IS_LOADING, SET_IS_LOADING] = useState(false);

    const handle: Handle<Fragment.SSO.SIGNUP.IForm> = {
        submit: (form) => {
            SET_IS_LOADING(true);
            console.log('SUBMIT', form);
            setTimeout(() => { SET_IS_LOADING(false); }, 1000);
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
        lastName: new FormControl({ value: 'teste', required: true }),
        firstName: new FormControl({ value: 'teste', required: true }),
        email: new FormControl({ value: 'teste@teste.com', type: 'email', required: true }),
        password: new FormControl({ value: '123123123', type: 'password', required: true }),
        confirmPassword: new FormControl({ value: '123123123', type: 'password', required: true })
    }, handle, validator);

    const goToSignin = () => navigate('/signup', { replace: false });

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
