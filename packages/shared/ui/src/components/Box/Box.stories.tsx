import React from 'react';
import { NodeProps } from 'reactflow';

import { ComponentStory, ComponentMeta } from '@storybook/react';

import Box from './Box';

export default {
    title: 'Components/Box',
    component: Box,
} as ComponentMeta<typeof Box>;

const Template: ComponentStory<typeof Box> = (args: NodeProps) => {
    return (
        <Box {...args} />
    );
};

export const Default = Template.bind({});

Default.args = {};