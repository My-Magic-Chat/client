import React, { useState } from 'react';

import { ComponentStory, ComponentMeta } from '@storybook/react';
import { FormControl, FormGroup, Handle } from '@components/Form';

import Forgot from './Dashboard';
import { IForm } from './interface';

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
