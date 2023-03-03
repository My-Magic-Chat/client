import React from 'react';

import { IProps } from './interface';

import './Badge.scss';

const Badge = ({ children, theme = 'brand' }: IProps) => {
    const cls = () => {
        const arr = ['ds-badge'];

        if (theme) { arr.push(`${theme}`); }

        return arr.join(' ');
    };

    return (
        <div className={cls()}>{children}</div>
    );
};

export default Badge;
