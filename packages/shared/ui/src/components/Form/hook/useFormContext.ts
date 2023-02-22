import { useState } from 'react';
import { FormGroup } from '../utilities/group';
import { AbstractControl } from '../utilities/interface';

export const useFormContext = (form: FormGroup<any>) => {
    const [FORM, SET_FORM] = useState<FormGroup<any>>(form);
    const [CONTROLNAME, SET_CONTROLNAME] = useState<string>('');

    const UPDATE_FORM = (control: AbstractControl<any>) => {
        SET_FORM(form => {
            form.controls = control;
            SET_CONTROLNAME(Object.keys(control)[0]);
            return new FormGroup(form.controls, form.handle, form.validator);
        });
    };

    return { FORM, UPDATE_FORM, LAST_UPDATED: CONTROLNAME };
};