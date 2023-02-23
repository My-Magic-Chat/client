import React from 'react';

import Form from '@components/Form';
import { FormGroup } from '@components/Form/utilities/group';

export const wrapperForm = (formGroup: FormGroup<any>, children: React.ReactNode) => {
    return (
        <Form formGroup={formGroup} >
            {children}
        </Form>
    );
};
