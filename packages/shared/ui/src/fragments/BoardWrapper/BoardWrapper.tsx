import React from 'react';

import Wrapper from '@components/Wrapper';
import { Slide } from '@animations';

import { Navbar } from '../Navbar';
import { Sidenav } from '../Sidenav';
import { IProps } from './interface';

import './BoardWrapper.scss';

const BoardWrapper = ({ navbar, sidenav, children }: IProps) => {
    const path = () => window.location.pathname;

    return (
        <Wrapper className="boardWrapper-root teste">
            <Sidenav
                buttons={sidenav.buttons}
                goToInitial={sidenav.goToInitial}
                handleClick={sidenav.goTo}
            />
            <div className="container">
                <Navbar path="Dashboard" user={navbar.user} handleClick={navbar.handleClick}/>
                <Slide.Switch className="content" direction="left" identifier={path()}>
                    {children}
                </Slide.Switch>
            </div>
        </Wrapper>
    );
};

export default BoardWrapper;
