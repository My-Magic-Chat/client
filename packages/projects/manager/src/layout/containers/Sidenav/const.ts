import { Fragment } from '@client/ui';

const BUTTONS_MAIN: Fragment.SIDENAV.IButton[] = [
    {
        label: 'Dashboard',
        path: '/',
        icon: 'chart'
    },
    {
        label: 'Workflows',
        path: '/workflows',
        icon: 'arrow-random'
    }
];

const BUTTONS_SUPPORT: Fragment.SIDENAV.IButton[] = [
    {
        label: 'Settings',
        path: '/settings',
        icon: 'setting'
    },
    {
        label: 'Help',
        path: 'helps',
        icon: 'question-circle'
    }
];

export const BUTTONS = {
    main: BUTTONS_MAIN,
    support: BUTTONS_SUPPORT
};