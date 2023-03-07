import React from 'react';

import { Slide } from '@animations';
import Avatar from '@components/Avatar';
import Dropdown from '@components/Dropdown';

import { BUTTONS } from './const';
import { IProps } from './interface';

import './Navbar.scss';

const Navbar = ({ path, user, handleClick }: IProps) => {
    const getAvatar = () => {
        return <Avatar name={user.name} image={user.image} handleClick={handleClick} />;
    };

    const getButtons = () => {
        return (
            BUTTONS.map(button => {
                const cls = `uil uil-${button.icon}`;
    
                return (
                    <button className="navbar-button">
                        <i className={cls}></i>
                        {button.label}
                    </button >
                );
            })
        );
    };

    return (
        <Slide.Initial direction="top" show={true} style={{ width: '100%' }}>
            <div className="navbar-root">
                <div>
                    <h3>{path}</h3>
                </div>
                <div>
                    <Dropdown direction="left">
                        {{ header: getAvatar(), body: getButtons() }}
                    </Dropdown>
                </div>
            </div>
        </Slide.Initial>
    );
};

export default Navbar;
