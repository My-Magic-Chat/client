import React, { useState } from 'react';

import { ComponentStory, ComponentMeta } from '@storybook/react';
import { FormControl, FormGroup, Handle } from '@components/Form';

import Forgot from './Forgot';
import { IForm } from './interface';

export default {
    title: 'Fragments/SSO/Forgot',
    component: Forgot
} as ComponentMeta<typeof Forgot>;

const Template: ComponentStory<typeof Forgot> = () => {
    const [IS_LOADING, SET_IS_LOADING] = useState(false);

    const handle: Handle<IForm> = {
        submit: (form) => {
            SET_IS_LOADING(true);
            console.log('SUBMIT', form);
            setTimeout(() => { SET_IS_LOADING(false); }, 1000);
        }
    };

    const formGroup = new FormGroup<IForm>({
        email: new FormControl({ value: 'teste@teste.com', type: 'email', required: true }),
    }, handle);

    return (
        <Forgot
            formGroup={formGroup}
            isLoading={IS_LOADING}
            goToSignin={() => console.log('go to signin')}
        />
    );
};

export const Default = Template.bind({});
Default.args = {};
