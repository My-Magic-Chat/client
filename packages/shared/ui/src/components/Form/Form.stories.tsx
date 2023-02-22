import React from 'react';

import { ComponentStory, ComponentMeta } from '@storybook/react';
import Input from '@components/Input';
import Button from '@components/Button';

import Form from './Form';
import { FormGroup } from './utilities/group';
import { FormControl } from './utilities/control';

export default {
    title: 'Components/Form',
    component: Form
} as ComponentMeta<typeof Form>;

interface IForm { email: string; password: string; }

const Template: ComponentStory<typeof Form> = () => {
    const formGroup = new FormGroup<IForm>({
        email: new FormControl({ value: '', required: true, type: 'email' }),
        password: new FormControl({ value: '', required: true, type: 'password' })
    }, {
        change: (form) => console.log('change', form),
        submit: (form) => console.log('submit', form)
    });

    return (
        <Form formGroup={formGroup} log>
            <Input controlName="email" placeholder="email"></Input>
            <Input controlName="password" placeholder="senha" type="password"></Input>
            <Button type="submit">Entrar</Button>
        </Form>
    );
};

export const Default = Template.bind({});

Default.args = {};