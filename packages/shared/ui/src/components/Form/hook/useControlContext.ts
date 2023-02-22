import { useContext } from 'react';

import Debounce from '@services/debounce';

import { Context } from '../context';


export const useControlContext = (controlName: string, delay = 0) => {
    const { FORM, UPDATE_FORM } = useContext(Context);
    const control = FORM?.controls[controlName];

    const update = (value: any) => {
        if (control) {
            Debounce.delay(() => {
                control.dirty = true;
                control.value = value;
                UPDATE_FORM && UPDATE_FORM({ [controlName]: control });
            }, delay);
        }
    };

    return { update, control };
};
