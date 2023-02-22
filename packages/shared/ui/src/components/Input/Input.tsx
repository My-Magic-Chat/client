import React from 'react';

import { useControlContext } from '@components/Form';
import debounce from '@services/debounce';

import { MASKS, NUMBER, NUMBER_MASK } from './const';
import { Sanitize } from './sanitaize';
import { IProps } from './interface';

import './Input.scss';

const Input = ({ placeholder = '', label, controlName, ...props }: IProps) => {
    const { control, update } = useControlContext(controlName);

    const sanitize = new Sanitize();

    const cls = () => {
        const arr = ['ds-input'];
        return arr.join(' ');
    };

    const groupCls = () => {
        const arr = ['ds-input-group'];
        if (getError()) { arr.push('_active'); }
        return arr.join(' ');
    };

    const errorCls = () => {
        const arr = ['message'];
        if (getError()) { arr.push('_active'); }
        return arr.join(' ');
    };

    const mapType = () => {
        if (control) {
            if (['password'].includes(control.type)) { return control.type; }
            if (NUMBER.includes(control.type)) { return 'tel'; }

            return 'text';
        }
    };

    const clean = (value: string): string => {
        let clean: string = value;
        if (control && value) {
            if (control.type === 'email') { clean = value; }
            if (NUMBER_MASK.includes(control.type)) { clean = sanitize.number(value); }
            if (MASKS.includes(control.type)) { clean = sanitize.text(value); }
        }
        return clean;
    };

    const handler = (event: any) => {
        debounce.delay(() => input(event), 500);
    };

    const input = (event: any) => {
        if (control) {
            control.dirty = true;
            const value = event.target.value || '';
            const sanitized = clean(value);
            control.value = sanitized;

            update(sanitized);
        }
    };

    const getPlaceholder = () => {
        return placeholder
            ? `${placeholder} ${control && control.required && !label ? '*' : ''}`
            : '';
    };

    const getError = () => {
        if (control) {
            return !control.isValid && control.error;
        }
    };

    const getLabel = () => {
        const identifier = control && control.required ? '*' : '';
        return label ? <label className='label'>{label} {identifier}</label> : '';
    };

    return (
        <div className='ds-input-container'>
            {getLabel()}
            <div className={groupCls()}>
                <input
                    {...props}
                    type={mapType()}
                    className={cls()}
                    defaultValue={control?.value}
                    placeholder={getPlaceholder()}
                    onBlur={(event) => input(event)}
                    onInput={(event) => handler(event)}
                />
            </div>
            <div className='error'>
                <div className={errorCls()}> {getError()} </div>
            </div>
        </div>
    );
};

export default Input;
