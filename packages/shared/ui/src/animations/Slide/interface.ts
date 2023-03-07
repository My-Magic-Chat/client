import { HTMLAttributes } from 'react';

export interface IDefaultProps extends HTMLAttributes<Element> {
    children: React.ReactNode;
    direction: 'left' | 'right' | 'bottom' | 'top';
}