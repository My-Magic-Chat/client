import React from 'react';

import { ComponentStory, ComponentMeta } from '@storybook/react';

import Sidenav from './Sidenav';
import { BUTTONS } from './__mocks__';

export default {
    title: 'Fragments/Sidenav',
    component: Sidenav
} as ComponentMeta<typeof Sidenav>;

const Template: ComponentStory<typeof Sidenav> = () => {
    return (
        <Sidenav
            buttons={BUTTONS}
            goTo={console.log}
            goToInitial={() => console.log('tela inicial')}
        />
    );
};

export const Default = Template.bind({});
Default.args = {};
