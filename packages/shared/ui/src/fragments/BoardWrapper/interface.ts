import React from 'react';

export interface IProps {
    goTo: () => any;
    goToInitial: () => any;
    handleClick: () => any;
    children: React.ReactNode;
}