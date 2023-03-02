import { useContext } from 'react';

import { ToastContext } from '../context';

export const useToast = () => {
    const { add } = useContext(ToastContext);

    return {
        add
    };
};
