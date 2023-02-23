import { Fragment, FormGroup, FormControl } from '@client/ui';

import './Signin.scss';

function Signin() {
    const formGroup = new FormGroup<Fragment.SSO.LOGIN.IForm>({
        email: new FormControl({ value: 'teste@teste.com', type: 'email', required: true }),
        password: new FormControl({ value: '123456', type: 'password', required: true }),
        remember: new FormControl({ value: false }),
    }, { submit: (form) => console.log('SUBMIT', form) });

    const forgotPassword = () => console.log('forgot');
    const signinWithGoogle = () => console.log('signinWithGoogle');

    return (
        <Fragment.SSO.Login
            formGroup={formGroup}
            forgotPassword={forgotPassword}
            signinWithGoogle={signinWithGoogle}
        />
    );
}

export default Signin;
