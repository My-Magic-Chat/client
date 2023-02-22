import React from 'react';

import { ComponentStory, ComponentMeta } from '@storybook/react';

import Wrapper from './Wrapper';

export default {
    title: 'Components/Wrapper',
    component: Wrapper,
} as ComponentMeta<typeof Wrapper>;

const Template: ComponentStory<typeof Wrapper> = () =>
    <Wrapper>
        <div>teste1</div>
        <div>teste2</div>
    </Wrapper>;

export const Default = Template.bind({});

Default.args = {};