import React from 'react';

import { FormGroup } from '../utilities/group';
import { AbstractControl } from '../utilities/interface';

export interface IContext {
    FORM?: FormGroup<any>;
    UPDATE_FORM?: (form: AbstractControl<any>) => void;
    LAST_UPDATED?: string;
}

export const Context = React.createContext<IContext>({});