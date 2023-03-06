import React from 'react';

import { ComponentStory, ComponentMeta } from '@storybook/react';

import Sidenav from './Sidenav';
import { BUTTONS, BUTTONS_SUPPORT } from './__mocks__';

export default {
    title: 'Fragments/Manager/Sidenav',
    component: Sidenav
} as ComponentMeta<typeof Sidenav>;

const Template: ComponentStory<typeof Sidenav> = () => {
    return (
        <Sidenav
            buttons={BUTTONS}
            buttonsSupport={BUTTONS_SUPPORT}
            goToInitial={() => console.log('tela inicial')}
            handleClick={console.log}
        />
    );
};

export const Default = Template.bind({});
Default.args = {};
