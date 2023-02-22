import React from 'react';

import { ComponentStory, ComponentMeta } from '@storybook/react';

import Checkbox from './Checkbox';

export default {
    title: 'Components/Checkbox',
    component: Checkbox,
} as ComponentMeta<typeof Checkbox>;

const Template: ComponentStory<typeof Checkbox> = (args) =>
    <Checkbox controlName={args.controlName}>
        Label aqui
    </Checkbox>;

export const Default = Template.bind({});

Default.args = {};