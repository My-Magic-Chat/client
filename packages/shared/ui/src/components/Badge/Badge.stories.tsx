import React from 'react';

import { ComponentStory, ComponentMeta } from '@storybook/react';

import Badge from './Badge';
import { IProps } from './interface';

export default {
    title: 'Components/Badge',
    component: Badge,
    argTypes: {
        children: {
            name: 'text',
            control: 'string',
            description: 'Badge text',
        },
        theme: {
            name: 'theme',
            control: { type: 'select' },
            options: ['brand', 'accent', 'support', 'red', 'green', 'blue', 'yellow'],
            description: 'Badge theme'
        }
    }
} as ComponentMeta<typeof Badge>;

const Template: ComponentStory<typeof Badge> = (args: IProps) => {
    return (
        <Badge theme={args.theme}> Text here </Badge>
    );
};

export const Brand = Template.bind({});

Brand.args = { theme: 'brand' };

export const Accent = Template.bind({});

Accent.args = { theme: 'accent' };

export const Support = Template.bind({});

Support.args = { theme: 'support' };

export const Blue = Template.bind({});

Blue.args = { theme: 'blue' };

export const Green = Template.bind({});

Green.args = { theme: 'green' };

export const Red = Template.bind({});

Red.args = { theme: 'red' };

export const Yellow = Template.bind({});

Yellow.args = { theme: 'yellow' };