import React from 'react';

import { IProps } from './interface';

import './Wrapper.scss';

const Wrapper = ({ children, gap }: IProps) => {
    const getWrapper = () => {
        const base = 'ds-wrapper';
        const arr = [base];

        if (gap) { arr.push(`${base}--gap`); } 
        return arr.join(' ');
    };

    return (
        <div className={getWrapper()}>{children}</div>
    );
};

export default Wrapper;
