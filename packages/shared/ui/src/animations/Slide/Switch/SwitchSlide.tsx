import React from 'react';
import { CSSTransition, SwitchTransition } from 'react-transition-group';

import { IProps } from './interface';

const SwitchSlide = ({ children, direction = 'left', identifier, ...props }: IProps) => {
    const getDirection = () => { return `animation-slide-${direction}`; };

    return (
        <SwitchTransition mode={'out-in'}>
            <CSSTransition
                key={identifier}
                addEndListener={(node, done) => node.addEventListener('transitionend', done, false)}
                classNames={getDirection()}>
                <div className={props.className}> {children} </div>
            </CSSTransition>
        </SwitchTransition>
    );
};

export default SwitchSlide;
