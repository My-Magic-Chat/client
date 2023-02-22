import React, { useEffect, useRef, useState } from 'react';

import { IProps } from './interface';
import { useFormContext } from './hook';
import { Context, IContext } from './context';

const Form = ({ children, formGroup, log, ...props }: IProps) => {
    const [FROM_SUBMIT, SET_FROM_SUBMIT] = useState(false);
    const isInitialRender = useRef(true);

    const context: IContext = useFormContext(formGroup);
    const { FORM, UPDATE_FORM, LAST_UPDATED } = context;

    useEffect(() => {
        handler();
        isInitialRender.current = false;
    }, [FORM]);

    const handler = () => {
        if (FORM) {
            if (!isInitialRender.current) {
                const action = FROM_SUBMIT ? 'submit' : 'change';

                if (FORM.isValid) {
                    formGroup.handle[action]?.({
                        values: FORM?.values,
                        errors: FORM?.errors,
                        lastUpdated: LAST_UPDATED,
                        isValid: Boolean(FORM?.isValid),
                        isDirty: Boolean(FORM?.isDirty)
                    });
                }

                SET_FROM_SUBMIT(false);
            }

            FORM.validate();
        }
    };

    const getLog = () => {
        return log ? (
            <pre>
                {JSON.stringify(FORM, null, 2)}
            </pre>
        ) : '';
    };

    const submit = (event) => {
        event.preventDefault();
        FORM?.dirty();
        SET_FROM_SUBMIT(true);
        UPDATE_FORM && UPDATE_FORM({});
    };

    return (
        <Context.Provider value={context}>
            <form onSubmit={(event) => submit(event)} {...props} >
                {children}
            </form>
            {getLog()}
        </Context.Provider>
    );
};

export default Form;
