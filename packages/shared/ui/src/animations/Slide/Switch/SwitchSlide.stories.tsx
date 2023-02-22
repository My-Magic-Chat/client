import React, { useState } from 'react';

import { ComponentStory, ComponentMeta } from '@storybook/react';
import Button from '@components/Button';

import { IProps } from './interface';
import SwitchSlide from './SwitchSlide';

export default {
    title: 'Animation/Slide/Switch',
    component: SwitchSlide,
} as ComponentMeta<typeof SwitchSlide>;

const Template: ComponentStory<typeof SwitchSlide> = (args: IProps) => {
    const [COUNT, SET_COUNT] = useState(0);

    return (
        <>
            <Button onClick={() => SET_COUNT(COUNT + 1)}>Switch</Button>
            <br /><br />
            <SwitchSlide direction={args.direction} identifier={String(COUNT)}>
                <h1>Fading at Switch Mount</h1>
            </SwitchSlide>
        </>
    );
};

export const Left = Template.bind({});

Left.args = { direction: 'left' };

export const Right = Template.bind({});

Right.args = { direction: 'right' };

export const Top = Template.bind({});

Top.args = { direction: 'top' };

export const Bottom = Template.bind({});

Bottom.args = { direction: 'bottom' };
