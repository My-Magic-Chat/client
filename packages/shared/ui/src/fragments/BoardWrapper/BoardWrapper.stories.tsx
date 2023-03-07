import React from 'react';

import { ComponentStory, ComponentMeta } from '@storybook/react';

import BoardWrapper from './BoardWrapper';

export default {
    title: 'Fragments/BoardWrapper',
    component: BoardWrapper
} as ComponentMeta<typeof BoardWrapper>;

const Template: ComponentStory<typeof BoardWrapper> = () => {
    return (
        <BoardWrapper
            goToInitial={() => console.log('goToInitial')}
            handleClick={() => console.log('handleClick')}
        >
            teste
        </BoardWrapper>
    );
};

export const Default = Template.bind({});
Default.args = {};
