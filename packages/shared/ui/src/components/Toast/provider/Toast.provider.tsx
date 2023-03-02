import React, { useMemo, useState } from 'react';

import { ToastContext, IToastContext } from '../context';
import { default as ToastComponent } from '../Toast';
import { Toast } from '../utilities/toast';
import { IProps } from './interface';

const ToastProvider = ({ children }: IProps) => {
    const [toasts, setToasts] = useState<Toast[]>([]);

    const context: IToastContext = useMemo(() => ({
        toasts,
        add: (toast: Toast) => { add(toast); },
    }), [toasts]);

    const getIndex = (toast: Toast) => {
        const { id } = toast;
        return toasts.findIndex(toast => toast.id === id);
    };

    const add = (toast: Toast) => { setToasts([...toasts, toast]); };

    const close = (toast: Toast) => {
        toast.show = false;
        update(toast);
    };

    const update = (toast: Toast) => {
        setToasts(prevent => {
            const i = getIndex(toast);
            prevent[i] = toast;
            const arr = [...prevent];
            return arr;
        });
    };

    const toastRender = () => {
        return (
            toasts.map((toast) =>
                <ToastComponent
                    close={() => close(toast)}
                    id={toast.id}
                    key={toast.id}
                    mode={toast.mode}
                    show={toast.show}
                    title={toast.title}
                    timeout={toast.timeout}
                    autoClose={toast.autoClose}
                    description={toast.description}
                />
            )
        );
    };

    return (
        <ToastContext.Provider value={context}>
            <div className="ds-toast-container">
                {toastRender()}
            </div>
            {children}
        </ToastContext.Provider>
    );
};

export default ToastProvider;
