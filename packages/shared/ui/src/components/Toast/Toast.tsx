import React, { useEffect, useState, useRef } from 'react';

import { Slide } from '@animations';
import { Timer } from '@services/timer';
import Icon, { ESize } from '@components/Icon';

import { IProps, IMode } from './interface';

const Toast = ({ title, description, mode, autoClose, timeout = 8000, show, id, close }: IProps) => {
    const [STOP, SET_STOP] = useState<boolean>();
    const isInitialRender = useRef(true);
    const [timer] = useState<Timer>(new Timer(timeout));

    useEffect(() => {
        if (isInitialRender.current && autoClose) { timer.resume(() => close(id)); }
        isInitialRender.current = false;
    }, []);

    const mapper: IMode = {
        info: { icon: 'info', theme: 'blue', color: 'mode' },
        danger: { icon: 'close', theme: 'red', color: 'mode' },
        success: { icon: 'check', theme: 'green', color: 'mode' },
        warning: { icon: 'attention', theme: 'yellow', color: 'text' },
    };

    const mapped = () => { return mapper[mode]; };

    const resume = () => {
        if (autoClose) {
            timer.resume(() => close(id));
            SET_STOP(false);
        }
    };

    const pause = () => {
        if (autoClose) {
            timer.pause();
            SET_STOP(true);
        }
    };

    const timerCls = () => {
        const pause = STOP ? 'pause' : '';
        const arr = ['timer', 'animate', mapped().theme, pause];
        return arr.join(' ');
    };

    return (
        <Slide.Initial direction="left" show={show}>
            <div className="ds-toast" onMouseEnter={() => pause()} onMouseLeave={() => resume()}>
                <div className="header">
                    <div className="left">
                        <div className={['icon', mapped().theme].join(' ')}>
                            <Icon icon={mapped().icon} size={ESize.SMALL} theme={mapped().color} />
                        </div>
                        <h4>{title}</h4>
                    </div>
                    <div className="right">
                        <button className="btn-close" onClick={() => close(id as string)}>
                            <Icon icon={'close'} size={ESize.SMALL} theme={'gray'} />
                        </button>
                    </div>
                </div>
                {description && (
                    <>
                        <div className="row"></div>
                        <div className="content">
                            <p>{description}</p>
                        </div>
                        {autoClose ?
                            <div className="timer-container">
                                <div className={timerCls()} style={{ animationDuration: `${timeout}ms` }} ></div>
                            </div> : ''}
                    </>
                )}
            </div>
        </Slide.Initial>
    );
};

export default Toast;
