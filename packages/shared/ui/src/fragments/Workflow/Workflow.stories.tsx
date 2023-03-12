import React, { useCallback } from 'react';
import { addEdge, Connection, Node, useEdgesState } from 'reactflow';

import { ComponentStory, ComponentMeta } from '@storybook/react';

import Workflow from './Workflow';

export default {
    title: 'Fragments/Workflow',
    component: Workflow
} as ComponentMeta<typeof Workflow>;

const Template: ComponentStory<typeof Workflow> = () => {
    const [edges, setEdges, onEdgesChange] = useEdgesState([]);

    const onConnect = useCallback((connection: Connection) => {
        console.log('aaa');
        return setEdges(edges => addEdge(connection, edges));
    }, []);

    const initialNodes = [
        { id: '1', position: { x: 0, y: 100 }, data: { label: '1' }, type: 'box' },
        { id: '2', position: { x: 400, y: 100 }, data: { label: '2' }, type: 'box' },
    ]satisfies Node[];

    return (
        <Workflow
            edges={edges}
            nodes={initialNodes}
            onConnect={onConnect}
            onEdgesChange={onEdgesChange}
        />
    );
};

export const Default = Template.bind({});
Default.args = {};
