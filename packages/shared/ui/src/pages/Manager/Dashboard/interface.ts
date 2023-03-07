import { FormGroup } from '@components/Form';

export interface IForm {
    email: string;
}

export interface IProps {
    handleClick: () => any;
    goToInitial: () => any;
}