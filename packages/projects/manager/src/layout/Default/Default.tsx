import { Fragment } from '@client/ui';

import { IProps } from './';
import { BUTTONS } from './const';

const Default = ({ children }: IProps) => {
    const sidenav: Fragment.SIDENAV.IProps = {
        buttons: BUTTONS,
        goToInitial() {
            console.log('goToInitial');
        },
        goTo(path) {
            console.log('handleClick', path);
        },
    };

    const navbar: Fragment.NAVBAR.IProps = {
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

    return (
        <Fragment.BoardWrapper navbar={navbar} sidenav={sidenav}>
            {children}
        </Fragment.BoardWrapper>
    );
};

export default Default;
