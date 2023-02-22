import React from 'react';

import { IProps } from './interface';

import './Grid.scss';

const Grid = ({ children, gap }: IProps) => {
    const getGrid = () => {
        const base = 'ds-grid';
        const arr = [base];

        if (gap) { arr.push(`${base}--gap`); } 
        return arr.join(' ');
    };

    return (
        <div className={getGrid()}>{children}</div>
    );
};

export default Grid;
