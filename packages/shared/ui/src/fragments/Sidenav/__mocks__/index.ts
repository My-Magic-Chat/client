import { IButton } from '../interface';

const BUTTONS_MAIN: IButton[] = [
    {
        label: 'Javascript',
        path: '/',
        icon: 'java-script'
    },
    {
        label: 'Css',
        path: '/',
        icon: 'css3-simple'
    },
    {
        label: 'Html',
        path: '/',
        badge: 'Beta',
        icon: 'html5'
    }
];

const BUTTONS_SUPPORT: IButton[] = [
    {
        label: 'Settings',
        path: '/',
        icon: 'setting'
    },
    {
        label: 'Help',
        path: '/',
        icon: 'question-circle'
    }
];

export const BUTTONS = {
    main: BUTTONS_MAIN,
    support: BUTTONS_SUPPORT
};