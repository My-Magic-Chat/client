import React, { useRef, useState } from 'react';
import { useOutside } from 'src/shared/hook/clickoutside';

import { Slide } from '@animations';

import { IProps } from './interface';

import './Dropdown.scss';

const Dropdown = ({ direction = 'right', children }: IProps) => {
    const [SHOW, SET_SHOW] = useState(false);
    const ref = useRef(null);
    useOutside(ref, () => toggle(false));

    const getBodyClass = () => {
        const arr = ['body', `body--${direction}`];

        if (SHOW) { arr.push('show'); }

        return arr.join(' ');
    };

    const toggle = (state: boolean) => {
        SET_SHOW(state);
    };

    return (
        <div className="ds-dropdown" ref={ref}>
            <div className="header" onClick={() => toggle(!SHOW)}>
                {children.header}
            </div>
            <Slide.Initial direction="top" show={SHOW}>
                <div className={getBodyClass()}>
                    {children.body}
                </div>
            </Slide.Initial>
        </div>
    );
};

export default Dropdown;
