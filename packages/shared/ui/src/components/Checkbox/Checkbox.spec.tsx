import React from 'react';

import userEvent from '@testing-library/user-event';
import { render, RenderResult } from '@testing-library/react';
import { FormControl, FormGroup } from '@components/Form';
import { wrapperForm } from '@components/Form/__mocks__';

import Checkbox from './Checkbox';

describe('Button component', () => {
    let formGroup: FormGroup<any>;
    let handleMock: any;

    const renderWrapper = (isChecked: boolean): RenderResult => {
        handleMock = jest.fn();

        formGroup = new FormGroup<any>({
            checkbox: new FormControl({ value: isChecked })
        }, { change: handleMock });

        return render(
            wrapperForm(formGroup, <Checkbox controlName="checkbox">Label here</Checkbox>)
        );
    };

    it('should call handle function only one time', () => {
        const wrapper = renderWrapper(false);
        const { getByText } = wrapper;
        const option = getByText('Label here');

        userEvent.click(option);

        expect(handleMock).toBeCalledTimes(1);
    });

    it('should render checkbox', () => {
        const wrapper = renderWrapper(true);
        const form = wrapper.container.querySelector('input');
        expect(form).toBeInTheDocument();
    });

    it('should render input label', () => {
        const wrapper = renderWrapper(true);
        const { getByText } = wrapper;
        expect(getByText('Label here')).toBeDefined();
    });

    it('should get input control value', () => {
        renderWrapper(false);
        expect(formGroup.values.checkbox).toBe(false);
    });

    it('should get input control value when is changed', () => {
        const wrapper = renderWrapper(false);
        const { getByText } = wrapper;
        const label = getByText('Label here');

        userEvent.click(label);

        expect(formGroup.values.checkbox).toBe(true);
    });
});
