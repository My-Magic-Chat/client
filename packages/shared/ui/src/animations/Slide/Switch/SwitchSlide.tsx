import React from 'react';
import { IProps } from './interface';
import { CSSTransition, SwitchTransition } from 'react-transition-group';

import '../Slide.scss';

const SwitchSlide = ({ children, direction = 'left', identifier }: IProps) => {
  const getDirection = () => { return `slide-${direction}`; };

  return (
    <SwitchTransition mode={'out-in'}>
      <CSSTransition
        key={identifier}
        addEndListener={(node, done) => node.addEventListener('transitionend', done, false)}
        classNames={getDirection()}>
        <div> {children} </div>
      </CSSTransition>
    </SwitchTransition>
  );
};

export default SwitchSlide;
