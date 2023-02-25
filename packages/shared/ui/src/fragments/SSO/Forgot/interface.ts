import { FormGroup } from '@components/Form';

export interface IForm {
    email: string;
}

export interface IProps {
    isLoading: boolean;
    goToSignin: () => any;
    formGroup: FormGroup<IForm>;
}