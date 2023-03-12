import React from 'react';
import ReactFlow, { Background } from 'reactflow';

import Box from '@components/Box';

import { IProps } from './interface';

import 'reactflow/dist/style.css';
import './Workflow.scss';

const Workflow = ({ nodes, edges, onEdgesChange, onConnect }: IProps) => {
    const NODE_TYPES = {
        box: Box
    };

    return (
        <div className="board-root">
            <ReactFlow
                nodes={nodes}
                edges={edges}
                nodeTypes={NODE_TYPES}
                onConnect={onConnect}
                onEdgesChange={onEdgesChange}
            >
                <Background gap={12} size={2} color="#ddd" />
            </ReactFlow>
        </div>
    );
};

export default Workflow;
