import React from 'react';

import { ComponentStory, ComponentMeta } from '@storybook/react';

import Avatar from './Avatar';
import { IProps } from './interface';

export default {
    title: 'Components/Avatar',
    component: Avatar,
} as ComponentMeta<typeof Avatar>;

const Template: ComponentStory<typeof Avatar> = (args: IProps) => {
    return (
        <Avatar
            name={args.name}
            image={args.image}
            handleClick={() => console.log('CLICK')}
        />
    );
};

export const Initials = Template.bind({});

Initials.args = { name: 'Leonardo Gonçalves' };

export const Image = Template.bind({});

Image.args = { image: 'https://randomuser.me/api/portraits/men/3.jpg' };