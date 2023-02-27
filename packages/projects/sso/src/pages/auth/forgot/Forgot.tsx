import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { Fragment, Handle, FormGroup, FormControl } from '@client/ui';

import './Forgot.scss';

function Forgot() {
    const navigate = useNavigate();
    const [IS_LOADING, SET_IS_LOADING] = useState(false);

    useEffect(() => { document.title = 'Esqueci minha senha'; }, []);

    const handle: Handle<Fragment.SSO.FORGOT.IForm> = {
        submit: (form) => {
            SET_IS_LOADING(true);
            console.log('SUBMIT', form);
            setTimeout(() => { SET_IS_LOADING(false); }, 1000);
        }
    };

    const formGroup = new FormGroup<Fragment.SSO.FORGOT.IForm>({
        email: new FormControl({ value: 'teste@teste.com', type: 'email', required: true }),
    }, handle);

    const goToSignin = () => navigate('/', { replace: false });

    return (
        <Fragment.SSO.Forgot
            formGroup={formGroup}
            isLoading={IS_LOADING}
            goToSignin={goToSignin}
        />
    );
}

export default Forgot;
