import React, { useState } from 'react';

import { ComponentStory, ComponentMeta } from '@storybook/react';
import { FormControl, FormGroup } from '@components/Form';

import Signin from './Signin';
import { IForm } from './interface';

export default {
    title: 'Fragments/SSO/Signin',
    component: Signin
} as ComponentMeta<typeof Signin>;

const Template: ComponentStory<typeof Signin> = () => {
    const [IS_LOADING, SET_IS_LOADING] = useState<boolean>(false);
    const [IS_LOADING_GOOGLE, SET_IS_LOADING_GOOGLE] = useState<boolean>(false);

    const formGroup = new FormGroup<IForm>({
        remember: new FormControl({ value: true }),
        email: new FormControl({ value: 'teste@teste.com', type: 'email', required: true }),
        password: new FormControl({ value: '123123123', type: 'password', required: true })
    }, {
        submit: (form) => {
            SET_IS_LOADING(true);
            setTimeout(() => { SET_IS_LOADING(false); }, 2000);
        }
    });

    const signinWithGoogle = () => {
        SET_IS_LOADING_GOOGLE(true);
        setTimeout(() => { SET_IS_LOADING_GOOGLE(false); }, 2000);
    };

    return (
        <Signin
            formGroup={formGroup}
            signinWithGoogle={() => signinWithGoogle()}
            goToCreate={() => console.log('Criar conta')}
            forgotPassword={() => console.log('Esqueci minha senha')}
            loading={{ signin: IS_LOADING, google: IS_LOADING_GOOGLE }}
        />
    );
};

export const Default = Template.bind({});
Default.args = {};
