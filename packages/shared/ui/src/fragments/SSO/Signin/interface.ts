import { FormGroup } from '@components/Form';

export interface IForm {
    email: string;
    password: string;
    remember: boolean;
}

export interface IProps {
    loading: {
        signin: boolean;
        google: boolean;
    };
    goToCreate: () => any;
    forgotPassword: () => any;
    signinWithGoogle: () => any;
    formGroup: FormGroup<IForm>;
}