import React from 'react';

import { ComponentStory, ComponentMeta } from '@storybook/react';

import { SIDENAV, NAVBAR } from './__mocks__';
import BoardWrapper from './BoardWrapper';

export default {
    title: 'Fragments/BoardWrapper',
    component: BoardWrapper
} as ComponentMeta<typeof BoardWrapper>;

const Template: ComponentStory<typeof BoardWrapper> = () => {
    return (
        <BoardWrapper navbar={NAVBAR} sidenav={SIDENAV}>
            teste
        </BoardWrapper>
    );
};

export const Default = Template.bind({});
Default.args = {};
