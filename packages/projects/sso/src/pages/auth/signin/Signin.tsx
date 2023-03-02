import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import { Fragment, FormGroup, FormControl, Handle } from '@client/ui';

import './Signin.scss';

function Signin() {
    const navigate = useNavigate();

    useEffect(() => { document.title = 'Entrar'; }, []);

    const handle: Handle<Fragment.SSO.SIGNIN.IForm> = {
        submit: () => {'';}
    };

    const formGroup = new FormGroup<Fragment.SSO.SIGNIN.IForm>({
        email: new FormControl({ value: 'teste@teste.com', type: 'email', required: true }),
        password: new FormControl({ value: '123456', type: 'password', required: true }),
        remember: new FormControl({ value: false }),
    }, handle);

    const createAccount = () => navigate('/signup', { replace: false });
    const forgotPassword = () => navigate('/forgot', { replace: false });

    const signinWithGoogle = () => console.log('signinWithGoogle');

    return (
        <Fragment.SSO.Signin
            goToCreate={createAccount}
            formGroup={formGroup}
            forgotPassword={forgotPassword}
            signinWithGoogle={signinWithGoogle}
        />
    );
}

export default Signin;