import React from 'react';

import Sprite from '@client/design/dist/icons/sprite.svg';

import { IProps, ESize } from './interface';

import './Icon.scss';

const Icon = ({ size = ESize.MID, icon, theme, animation, ...props }: IProps) => {
    const cls = () => {
        const arr = ['ds-icon'];

        if (theme) { arr.push(`_${theme}`); }
        if (animation) { arr.push(`_${animation}`); }

        return arr.join(' ');
    };

    return (
        <svg width={size} height={size} className={cls()} {...props}>
            <use xlinkHref={`${Sprite}#${icon}`}></use>
        </svg>
    );
};

export default Icon;
