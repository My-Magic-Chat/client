import React from 'react';

import { IButton } from '@fragments/Sidenav/interface';
import { IUser } from '@fragments/Navbar/interface';

export interface IProps {
    sidenav: {
        goTo: () => any;
        goToInitial: () => any;
        buttons: {
            main: Array<IButton>;
            support: Array<IButton>;
        };
    };
    navbar: {
        user: IUser;
        handleClick: () => any;
    }
    children: React.ReactNode;
}