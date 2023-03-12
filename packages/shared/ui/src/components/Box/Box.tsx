import React from 'react';
import { NodeProps, Handle, Position } from 'reactflow';

import './Box.scss';

const Box = ({ ...props }: NodeProps) => {
    const get1 = (data) => {
        console.log('teste', data);
        return (
            <div>
                <p> {data.text} </p>

                <button style={{ 'position': 'relative' }}>
                    <Handle id="right" type="source" position={Position.Right} />
                    {data.options.yes}
                </button>
                <button style={{ 'position': 'relative' }}>
                    <Handle id="bolo" type="source" position={Position.Right} />
                    {data.options.no}
                </button>
            </div>
        );
    };

    return (
        <div className="box-root">

            {
                props.data.type === 'TEXT_OPTIONS' && get1(props.data.content)
            }

            {/* <Handle id="right" type="source" position={Position.Right} />
            <Handle id="left" type="target" position={Position.Left} /> */}
            {props.data.label}
        </div>
    );
};

export default Box;
