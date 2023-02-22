import React, { useState } from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { IProps } from './interface';
import InitialSlide from './InitialSlide';

export default {
  title: 'Animation/Slide/Initial',
  component: InitialSlide,
  argTypes: {
    direction: {
      name: 'direction',
      control: { type: 'select' },
      options: ['left', 'right'],
      description: 'Slide animation direction'
    }
  }
} as ComponentMeta<typeof InitialSlide>;

const Template: ComponentStory<typeof InitialSlide> = (args: IProps) => {
  const [show, setShow] = useState(true);
  return (
    <>
      <button onClick={() => setShow(!show)}>toggle</button>
      <InitialSlide direction={args.direction} show={show}>
        <h1>Fading at Initial Mount</h1>
      </InitialSlide>
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
