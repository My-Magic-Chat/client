import { HTMLAttributes } from 'react';

export interface IProps extends HTMLAttributes<Element> {
    gap?: boolean;
    children: React.ReactNode;
}
