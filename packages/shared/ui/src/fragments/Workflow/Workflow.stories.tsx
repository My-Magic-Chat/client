import React, { useCallback } from 'react';
import { addEdge, Connection, Node, useEdgesState, useNodesState } from 'reactflow';

import { ComponentStory, ComponentMeta } from '@storybook/react';

import Workflow from './Workflow';

export default {
    title: 'Fragments/Workflow',
    component: Workflow
} as ComponentMeta<typeof Workflow>;

const data_1 = {
    type: 'TEXT_OPTIONS',
    content: {
        text: 'um texto bem maneiro aqui',
        options: {
            yes: 'Sim, vou querer!',
            no: 'Acho que não'
        }
    }
};

const data_2 = {
    type: 'TEXT',
    content: {
        text: 'Parabens Sucesso'
    }
};

const INITIAL_NODES = [
    { id: '1', position: { x: 0, y: 100 }, data: data_1, type: 'box' },
    { id: '2', position: { x: 400, y: 100 }, data: data_2, type: 'box' },
] satisfies Node[];

const Template: ComponentStory<typeof Workflow> = () => {
    const [edges, setEdges, onEdgesChange] = useEdgesState([]);
    const [nodes, setNodes, onNodesChange] = useNodesState(INITIAL_NODES);

    const onConnect = useCallback((connection: Connection) => {
        console.log('aaa');
        return setEdges(edges => addEdge(connection, edges));
    }, []);

    return (
        <Workflow
            edges={edges}
            nodes={nodes}
        />
    );
};

export const Default = Template.bind({});
Default.args = {};
