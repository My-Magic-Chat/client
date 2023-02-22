import React from 'react';

import { IProps } from './interface';

import './Wrapper.scss';

const Wrapper = ({ children }: IProps) => {
    return (
        <div className="ds-wrapper">{children}</div>
    );
};

export default Wrapper;
