import React from 'react';

import Wrapper from '@components/Wrapper';
import { Slide } from '@animations';

import { Navbar } from '../Navbar';
import { Sidenav } from '../Sidenav';
import { IProps } from './interface';
import { USER } from '../Navbar/__mocks__';
import { BUTTONS } from '../Sidenav/__mocks__';

import './BoardWrapper.scss';

const BoardWrapper = ({ handleClick, goTo, goToInitial, children }: IProps) => {
    const path = () => window.location.pathname;

    return (
        <Wrapper className="boardWrapper-root teste">
            <Sidenav
                buttons={BUTTONS}
                goToInitial={goToInitial}
                handleClick={goTo}
            />
            <div className="container">
                <Navbar path="Dashboard" user={USER} handleClick={handleClick}/>
                <Slide.Switch className="content" direction="left" identifier={path()}>
                    {children}
                </Slide.Switch>
            </div>
        </Wrapper>
    );
};

export default BoardWrapper;
