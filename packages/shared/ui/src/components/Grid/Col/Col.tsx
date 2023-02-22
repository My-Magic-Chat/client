import React from 'react';

import { IProps } from './interface';

const Grid = ({ children, span, reference }: IProps) => {
    const getCol = () => {
        const base = 'ds-col';
        if (reference) { base.concat(`-${reference}`); } 
        return [base, `${base}-${span}`].join(' ');
    };

    return (
        <div className={getCol()}>{children}</div>
    );
};

export default Grid;
