import React from 'react';

import { IProps, ESize } from './interface';

// eslint-disable-next-line @typescript-eslint/no-var-requires
const logo = require('@client/design/dist/icons/sprite.svg') as string;

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
            <use xlinkHref={`${logo}#${icon}`}></use>
        </svg>
    );
};

export default Icon;
