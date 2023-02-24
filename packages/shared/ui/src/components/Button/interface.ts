import { HTMLAttributes } from 'react';

export interface IProps extends HTMLAttributes<HTMLButtonElement> {
    fluid?: boolean;
    outline?: boolean;
    disabled?: boolean;
    isLoading?: boolean;
    children: React.ReactNode;
    theme?: 'brand' | 'accent';
    type?: 'submit' | 'button';
}
