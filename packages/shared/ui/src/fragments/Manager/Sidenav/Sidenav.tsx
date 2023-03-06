import React from 'react';

import { Slide } from '@animations';

import { IButton, IProps } from './interface';

import './Sidenav.scss';

const Sidenav = ({ buttons, buttonsSupport, handleClick, goToInitial }: IProps) => {
    const getButton = ({ label, badge, path, icon }: IButton) => {
        const getClass = () => {
            const shouldBeActivated = window.location.pathname === path;
            const arr = ['btn'];

            if (shouldBeActivated) { arr.push('btn--active'); }

            return arr.join(' ');
        };

        return (
            <button className={getClass()} onClick={() => handleClick(path)}>
                <div>
                    <i className={['uil', `uil-${icon}`].join(' ')}></i>
                    {label}
                </div>
                {badge && <h6>
                    <span className="ds-badge accent">{badge}</span>
                </h6 >}
            </button >
        );
    };

    return (
        <Slide.Initial direction="left" show={true}>
            <div className="sidenav-root">
                <div className="logo" onClick={goToInitial}>
                    <div className="container">
                        <img src="https://img.logoipsum.com/288.svg" alt="" />
                    </div>
                </div>
                <div className="content">
                    <div>
                        {
                            buttons.map(btn => getButton(btn))
                        }
                    </div>

                    <div className="row"></div>

                    <div>
                        {
                            buttonsSupport.map(btn => getButton(btn))
                        }
                    </div>
                </div>
            </div>
        </Slide.Initial>
    );
};

export default Sidenav;
