import React from 'react';

import { useControlContext } from '@components/Form';

import { IProps } from './interface';

import './Checkbox.scss';

const Checkbox = ({ children, controlName }: IProps) => {
    const { control, update } = useControlContext(controlName);

    const handle = (e: React.ChangeEvent<HTMLInputElement>) => {
        console.log('aa');
        update(e.target.checked);
    };

    return (
        <div className="ds-checkbox">
            <input type="checkbox" id="todo" name="todo" checked={control?.value} onChange={handle}/>
            <label htmlFor="todo" data-content="Get out of bed">{children}</label>
        </div>
    );
};

export default Checkbox;
