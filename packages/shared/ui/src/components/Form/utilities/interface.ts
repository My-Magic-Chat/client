import { FormControl } from './control';

export type AbstractControl<T> = { [key in keyof T]: FormControl<T[key]> }

export interface Handle<T> {
    change?: (form: IHandleForm<T>) => void;
    submit?: (form: IHandleForm<T>) => void;
}

export interface IHandleForm<T> {
    values: T;
    isValid: boolean;
    isDirty: boolean;
    lastUpdated?: keyof T;
    errors?: Array<any>;
}

export type TType = 'text' | 'email' | 'password' | 'tel';

export interface Control<C> {
    value: C;
    type?: TType;
    name?: string;
    error?: string;
    dirty?: boolean;
    disabled?: boolean;
    required?: boolean;
}

export interface IMessage {
    tel: () => string;
    email: () => string;
    required: (field: string) => string;
}

export interface Validator {
    [x: string]: (form: any) => void;
}