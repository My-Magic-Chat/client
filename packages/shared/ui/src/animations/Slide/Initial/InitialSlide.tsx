import React, { useState, useRef, useEffect } from 'react';
import { CSSTransition } from 'react-transition-group';

import { IProps } from './interface';

const Slide = ({ children, direction = 'left', show }: IProps) => {
    const [SHOW, SET_SHOW] = useState(false);
    const nodeRef = useRef(null);

    useEffect(() => { SET_SHOW(show); }, [show]);

    const getDirection = () => { return `animation-slide-${direction}`; };

    return (
        <CSSTransition
            in={SHOW}
            unmountOnExit
            timeout={1000}
            nodeRef={nodeRef}
            classNames={getDirection()}>
            <div ref={nodeRef}> {children} </div>
        </CSSTransition>
    );
};

export default Slide;
