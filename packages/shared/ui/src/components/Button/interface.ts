import { HTMLAttributes } from 'react';

export interface IProps extends HTMLAttributes<HTMLButtonElement> {
    fluid?: boolean;
    outline?: boolean;
    disabled?: boolean;
    children: React.ReactNode;
    theme?: 'brand' | 'accent';
    readonly type?: 'submit' | 'button';
}
