import React from 'react';

import { ComponentStory, ComponentMeta } from '@storybook/react';
import { FormControl, FormGroup } from '@components/Form';

import Signin from './Signin';
import { IForm } from './interface';

export default {
    title: 'Fragments/SSO/Signin',
    component: Signin
} as ComponentMeta<typeof Signin>;

const Template: ComponentStory<typeof Signin> = () => {
    const formGroup = new FormGroup<IForm>({
        remember: new FormControl({ value: true }),
        email: new FormControl({ value: '', type: 'email', required: true }),
        password: new FormControl({ value: '', type: 'password', required: true })
    }, { submit: (form) => console.log('Submit', form) });

    return (
        <Signin
            formGroup={formGroup}
            forgotPassword={() => console.log('Esqueci minha senha')}
            signinWithGoogle={() => console.log('Logando com o google')}
        />
    );
};

export const Default = Template.bind({});
Default.args = {};
