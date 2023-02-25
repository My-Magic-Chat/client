import React from 'react';

import { useControlContext } from '@components/Form';

import { IProps } from './interface';

import './Checkbox.scss';

const Checkbox = ({ children, controlName }: IProps) => {
    const { control, update } = useControlContext(controlName);

    const handle = (e: React.ChangeEvent<HTMLInputElement>) => update(e.target.checked);

    return (
        <div className="ds-checkbox">
            <input type="checkbox" id={controlName} name={controlName} checked={control?.value} onChange={handle} />
            <label htmlFor={controlName}>{children}</label>
        </div>
    );
};

export default Checkbox;
