import React from 'react';

import { ComponentStory, ComponentMeta } from '@storybook/react';

import Grid from './Grid';
import Col from './Col';

export default {
    title: 'Components/Grid',
    component: Grid,
} as ComponentMeta<typeof Grid>;

const style = (color) => ({ background: color, width: '100%', padding: '15px' });

const Template: ComponentStory<typeof Grid> = () =>
    <Grid gap>
        <Col span={6}>
            <div style={style('#e57373')}>Teste 1</div>
        </Col>
        <Col span={3}>
            <div style={style('#f06292')}>Teste 2</div>
        </Col>
        <Col span={3}>
            <div style={style('#ba68c8')}>Teste 3</div>
        </Col>
        <Col span={12}>
            <div style={style('#9575cd')}>Teste 4</div>
        </Col>
    </Grid>;

export const Default = Template.bind({});

Default.args = {};