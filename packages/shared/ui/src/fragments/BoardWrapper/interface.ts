import React from 'react';

import { IProps as INavbarProps } from '@fragments/Navbar/interface';
import { IProps as ISidenavProps } from '@fragments/Sidenav/interface';

export interface IProps {
    navbar: INavbarProps;
    sidenav: ISidenavProps;
    children: React.ReactNode;
}