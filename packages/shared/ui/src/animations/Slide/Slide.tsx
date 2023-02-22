import React, { useState, useRef, useEffect } from 'react';
import { CSSTransition } from 'react-transition-group';
import { IProps } from './interface';

const Slide = ({ children, direction = 'left', show }: IProps) => {
    const [SHOW, SET_SHOW] = useState(false);
    const nodeRef = useRef(null);

    useEffect(() => { setTimeout(() => SET_SHOW(show), 0); });

    const getDirection = () => { return `slide-${direction}`; };

    return (
        <div>
            <CSSTransition
                nodeRef={nodeRef}
                in={SHOW}
                timeout={1000}
                unmountOnExit
                classNames={getDirection()}>
                <div ref={nodeRef}> {children} </div>
            </CSSTransition>
        </div>
    );
};

export default Slide;
