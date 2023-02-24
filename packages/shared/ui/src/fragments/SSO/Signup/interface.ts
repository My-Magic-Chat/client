import { FormGroup } from '@components/Form';

export interface IForm {
    email: string;
    lastName: string;
    firstName: string;
    password: string;
    confirmPassword: string;
}

export interface IProps {
    isLoading: boolean;
    goToCreate: () => any;
    signinWithGoogle: () => any;
    formGroup: FormGroup<IForm>;
}