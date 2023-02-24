import { FormHTMLAttributes } from 'react';

import { FormGroup } from './utilities/group';

export { Handle, Validator } from './utilities/interface';

export interface IProps extends FormHTMLAttributes<HTMLFormElement> {
    log?: boolean;
    children: React.ReactNode;
    formGroup: FormGroup<any>;
}
