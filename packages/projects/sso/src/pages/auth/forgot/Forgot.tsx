import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import core from 'src/services/core';

import { Fragment, Handle, FormGroup, FormControl, Toast, useToast } from '@client/ui';


import './Forgot.scss';

function Forgot() {
    const navigate = useNavigate();
    const toastService = useToast();
    const [IS_LOADING, SET_IS_LOADING] = useState(false);

    useEffect(() => { document.title = 'Esqueci minha senha'; }, []);

    const handle: Handle<Fragment.SSO.FORGOT.IForm> = {
        submit: (form) => {
            SET_IS_LOADING(true);
            core.sso.forgot(form.values.email)
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

    const formGroup = new FormGroup<Fragment.SSO.FORGOT.IForm>({
        email: new FormControl({ value: '', type: 'email', required: true }),
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
