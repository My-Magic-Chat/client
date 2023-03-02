import { createContext } from 'react';

import { Toast } from '../utilities/toast';

export interface IToastContext {
    toasts: Array<Toast>;
    add: (modal: Toast) => void;
}

export const ToastContext = createContext<IToastContext>({
    toasts: [],
    add: () => null,
});
