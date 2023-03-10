import React from 'react';

import { ComponentStory, ComponentMeta } from '@storybook/react';

import Button from './Button';
import { IProps } from './interface';
import mocks from './__mocks__';

export default {
    title: 'Components/Button',
    component: Button,
    argTypes: {
        children: {
            name: 'text',
            control: 'string',
            description: 'Button text',
        },
        theme: {
            name: 'theme',
            control: { type: 'select' },
            options: ['brand', 'accent'],
            description: 'Button theme'
        },
        type: {
            name: 'type',
            control: { type: 'radio' },
            options: ['button', 'submit'],
            description: 'Button type'
        },
        fluid: {
            name: 'fluid',
            control: { type: 'boolean' },
            options: [true, false],
            description: 'Make Fluid button'
        },
        disabled: {
            name: 'disabled',
            control: { type: 'boolean' },
            options: [true, false],
            description: 'Make disabled button'
        },
        isLoading: {
            name: 'isLoading',
            control: { type: 'boolean' },
            options: [true, false],
            description: 'Make loading button'
        }
    }
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args: IProps) => {
    return (
        <Button
            type={args.type}
            theme={args.theme}
            fluid={args.fluid}
            disabled={args.disabled}
            isLoading={args.isLoading}>
            {args.children}
        </Button >
    );
};

export const Primary = Template.bind({});

Primary.args = { ...mocks.data };

export const Secondary = Template.bind({});

Secondary.args = { ...mocks.data, theme: 'accent' };

export const Disabled = Template.bind({});

Disabled.args = { ...mocks.data, disabled: true };

export const Fluid = Template.bind({});

Fluid.args = { ...mocks.data, fluid: true };