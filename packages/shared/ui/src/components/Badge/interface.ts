import { HTMLAttributes } from 'react';

export interface IProps extends HTMLAttributes<HTMLButtonElement> {
    children: React.ReactNode;
    theme?: 'brand' | 'accent' | 'support' | 'red' | 'green' | 'blue' | 'yellow';
}
