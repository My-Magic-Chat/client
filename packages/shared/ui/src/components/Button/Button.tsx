import React from 'react';

import { IProps } from './interface';

import './Button.scss';

const Button = ({
    children,
    fluid = false,
    type = 'button',
    theme = 'brand',
    outline = false,
    disabled = false,
    ...props
}: IProps) => {
    const cls = () => {
        const arr = ['ds-btn'];

        if (theme && !outline) { arr.push(`_${theme}`); }
        if (outline) { arr.push('_outline'); }
        if (fluid) { arr.push('_fluid'); }

        return arr.join(' ');
    };

    return (
        <button
            {...props}
            type={type}
            className={cls()}
            disabled={disabled}
        >{children}</button>
    );
};

export default Button;
