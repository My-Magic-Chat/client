import React from 'react';
import { NodeProps, Handle, Position } from 'reactflow';

import './Box.scss';

const Box = ({ ...props }: NodeProps) => {
    return (
        <div className="box-root">
            <Handle id="right" type="source" position={Position.Right} />
            <Handle id="left" type="target" position={Position.Left} />
        </div>
    );
};

export default Box;
