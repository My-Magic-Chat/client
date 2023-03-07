import React from 'react';

import { ComponentStory, ComponentMeta } from '@storybook/react';

import { USER } from './__mocks__';
import Navbar from './Navbar';

export default {
    title: 'Fragments/Navbar',
    component: Navbar
} as ComponentMeta<typeof Navbar>;

const Template: ComponentStory<typeof Navbar> = () => {
    return (
        <Navbar handleClick={() => console.log('handleClick')} path="Dashboard" user={USER} />
    );
};

export const Default = Template.bind({});
Default.args = {};
