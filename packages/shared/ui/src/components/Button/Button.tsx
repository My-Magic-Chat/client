import React from 'react';

import { IProps } from './interface';
import Icon, { ESize, TTheme } from '../Icon';

import './Button.scss';

const Button = ({
    children,
    fluid = false,
    type = 'button',
    theme = 'brand',
    outline = false,
    disabled = false,
    isLoading = false,
    ...props
}: IProps) => {
    const cls = () => {
        const arr = ['ds-btn'];

        if (theme && !outline) { arr.push(`_${theme}`); }
        if (outline) { arr.push('_outline'); }
        if (fluid) { arr.push('_fluid'); }

        return arr.join(' ');
    };

    const getIconTheme = (): TTheme => {
        return outline ? 'gray' : 'mode';
    };

    const getContent = () => {
        return isLoading
            ? <Icon icon="loading" theme={getIconTheme()} animation="rotate" size={ESize.BIG} style={{ marginTop: '5px' }}></Icon>
            : children;
    };

    return (
        <button
            {...props}
            type={type}
            className={cls()}
            disabled={disabled}
        >{getContent()}</button>
    );
};

export default Button;
