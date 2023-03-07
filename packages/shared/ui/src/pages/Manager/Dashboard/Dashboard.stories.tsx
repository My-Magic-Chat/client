import React from 'react';

import { ComponentStory, ComponentMeta } from '@storybook/react';

import Forgot from './Dashboard';

export default {
    title: 'Pages/Manager/Dashboard',
    component: Forgot
} as ComponentMeta<typeof Forgot>;

const Template: ComponentStory<typeof Forgot> = () => {
    return (
        <p>teste</p>
    );
};

export const Default = Template.bind({});
Default.args = {};
