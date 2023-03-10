import React from 'react';

import { render, RenderResult } from '@testing-library/react';
import { FormControl, FormGroup } from '@components/Form';
import { wrapperForm } from '@components/Form/__mocks__';

import Input from './Input';
import { IProps } from './interface';

describe('Button component', () => {
    let formGroup: FormGroup<any>;
    let handleMock: any;

    const renderWrapper = (props: Partial<IProps>, value: string): RenderResult => {
        handleMock = jest.fn();

        formGroup = new FormGroup<any>({
            input: new FormControl({ value })
        }, { change: handleMock });

        return render(
            wrapperForm(formGroup, <Input {...props} controlName="input" />)
        );
    };

    it('should render input', () => {
        const wrapper = renderWrapper({ }, '');
        const input = wrapper.container.querySelector('input');
        expect(input).toBeInTheDocument();
    });

    it('should render input placeholder', () => {
        const wrapper = renderWrapper({ placeholder: 'um placeholder aqui' }, '');
        const { getByPlaceholderText } = wrapper;
        expect(getByPlaceholderText('um placeholder aqui')).toBeDefined();
    });
});
