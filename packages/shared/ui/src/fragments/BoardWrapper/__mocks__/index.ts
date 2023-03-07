import { IProps as INavProps } from '../../Navbar/interface';
import { IProps as ISidenavProps } from '../../Sidenav/interface';
import { BUTTONS } from './../../Sidenav/__mocks__';

export const SIDENAV: ISidenavProps = {
    buttons: BUTTONS,
    goToInitial() {
        console.log('goToInitial');
    },
    goTo(path) {
        console.log('handleClick', path);
    },
};

export const NAVBAR: INavProps = {
    path: '',
    user: {
        name: 'leozin',
        email: 'leo.contato@gmail.com',
        image: ''
    },
    handleClick() {
        console.log('handleClick');
    },
};