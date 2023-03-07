import React from 'react';

import { render, RenderResult } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import Button from './Avatar';

describe('Button component', () => {
    let wrapper: RenderResult;
    let handleMock: any;

    beforeEach(() => {
        handleMock = jest.fn();

        wrapper = render(
            <Button onClick={handleMock}>Text here</Button>
        );
    });

    it('should render button', () => {
        const form = wrapper.container.querySelector('button');
        expect(form).toBeInTheDocument();
    });

    it('should render button text', () => {
        const { getByText } = wrapper;
        expect(getByText('Text here')).toBeDefined();
    });

    it('should call handle function two times', () => {
        const { getByText } = wrapper;
        const button = getByText('Text here');

        userEvent.click(button);
        userEvent.click(button);

        expect(handleMock).toBeCalledTimes(2);
    });
});
