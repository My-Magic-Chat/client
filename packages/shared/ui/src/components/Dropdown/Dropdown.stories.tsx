import React from 'react';

import { ComponentStory, ComponentMeta } from '@storybook/react';

import Dropdown from './Dropdown';
import Button from '../Button';

export default {
    title: 'Components/Dropdown',
    component: Dropdown,
} as ComponentMeta<typeof Dropdown>;

const Template: ComponentStory<typeof Dropdown> = () => {
    const getHeader = () => { return <Button>Abrir</Button>; };

    const getStyle = (): React.CSSProperties => {
        return {
            border: 'none',
            width: '100%',
            padding: '10px',
            background: 'transparent',
            cursor: 'pointer'
        };
    };

    const getBody = () => {
        return (
            <div>
                <button style={getStyle()} onClick={() => console.log('aaa')}>Teste 1</button>
                <button style={getStyle()} onClick={() => console.log('bbb')}>Teste 2</button>
                <button style={getStyle()} onClick={() => console.log('ccc')}>Teste 3</button>
            </div>
        );
    };

    return (
        <Dropdown direction="right">
            {{ header: getHeader(), body: getBody() }}
        </Dropdown>
    );
};

export const Initials = Template.bind({});

Initials.args = {};