import React, { useState } from 'react';

import { ComponentStory, ComponentMeta } from '@storybook/react';
import { FormControl, FormGroup, Handle, Validator } from '@components/Form';

import Signup from './Signup';
import { IForm } from './interface';

export default {
    title: 'Fragments/SSO/Signup',
    component: Signup
} as ComponentMeta<typeof Signup>;

const Template: ComponentStory<typeof Signup> = () => {
    const [IS_LOADING, SET_IS_LOADING] = useState(false);

    const handle: Handle<IForm> = {
        submit: (form) => {
            SET_IS_LOADING(true);
            console.log('SUBMIT', form);
            setTimeout(() => { SET_IS_LOADING(false); }, 1000);
        }
    };

    const validator: Validator<IForm> = {
        password: (form) => {
            const { password, confirmPassword } = form.values;

            if (password && (confirmPassword !== password)) {
                form.controls.confirmPassword.error = 'As senhas devem ser iguais';
            } else {
                form.controls.confirmPassword.error = '';
            }
        }
    };

    const formGroup = new FormGroup<IForm>({
        lastName: new FormControl({ value: 'teste', required: true }),
        firstName: new FormControl({ value: 'teste', required: true }),
        email: new FormControl({ value: 'teste@teste.com', type: 'email', required: true }),
        password: new FormControl({ value: '123123123', type: 'password', required: true }),
        confirmPassword: new FormControl({ value: '123123123', type: 'password', required: true })
    }, handle, validator);

    return (
        <Signup
            formGroup={formGroup}
            goToSignin={() => console.log('go to create')}
            signinWithGoogle={() => console.log('Logando com o google')}
            isLoading={IS_LOADING}
        />
    );
};

export const Default = Template.bind({});
Default.args = {};
