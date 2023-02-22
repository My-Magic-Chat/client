import React from 'react';

import { ComponentStory, ComponentMeta } from '@storybook/react';

import Input, { IProps } from '.';
import mocks from './__mocks__';

export default {
    title: 'Components/Input',
    component: Input,
    argTypes: {
        type: {
            name: 'type',
            control: { type: 'select' },
            options: mocks.options.type,
            description: 'Input type',
        }
    }
} as ComponentMeta<typeof Input>;

const Template: ComponentStory<typeof Input> = (args: IProps) => <Input
    type={args.type}
    label={args.label}
    placeholder={args.placeholder}
    controlName={args.controlName}
/>;

export const Text = Template.bind({});

Text.args = { ...mocks.data };

export const Email = Template.bind({});

Email.args = { ...mocks.data, controlName: 'email' };

export const Password = Template.bind({});

Password.args = { ...mocks.data, controlName: 'password' };

export const Required = Template.bind({});

Required.args = { ...mocks.data, controlName: 'required' };

export const Label = Template.bind({});

Label.args = { ...mocks.data, label: 'Label Here' };