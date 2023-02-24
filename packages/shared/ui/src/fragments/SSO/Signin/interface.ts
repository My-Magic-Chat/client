import { FormGroup } from '@components/Form';

export interface IForm {
    email: string;
    password: string;
    remember: boolean;
}

export interface IProps {
    goToCreate: () => any;
    forgotPassword: () => any;
    signinWithGoogle: () => any;
    formGroup: FormGroup<IForm>;
}