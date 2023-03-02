import React from 'react';

import userEvent from '@testing-library/user-event';
import { FormControl, FormGroup } from '@components/Form';
import { act, render, RenderResult } from '@testing-library/react';

import Signin from './Signin';
import { IForm } from './interface';

describe('Signin', () => {
    let wrapper: RenderResult;
    let formGroup: FormGroup<IForm>;

    const handle = {
        submit: jest.fn(),
        create: jest.fn(),
        forgot: jest.fn(),
        google: jest.fn(),
    };

    beforeEach(() => {
        formGroup = new FormGroup<IForm>({
            remember: new FormControl({ value: true }),
            email: new FormControl({ value: '', type: 'email', required: true }),
            password: new FormControl({ value: '', type: 'password', required: true })
        }, { submit: (form) => handle.submit });

        wrapper = render(
            <Signin
                formGroup={formGroup}
                goToCreate={handle.create}
                forgotPassword={handle.forgot}
                signinWithGoogle={handle.google}
                loading={{ signin: false, google: false }}
            />
        );
    });

    it.skip('Should get email form value', () => {
        const { getByLabelText } = wrapper;
        const input = getByLabelText('Email');
        const email = 'teste@teste.com';

        act(() => {
            userEvent.type(input, email);
            jest.runAllTimers();
        });

        expect(formGroup.values.email).toBe(email);
    });
});