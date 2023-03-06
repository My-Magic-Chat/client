import { Fragment } from '@client/ui';

export const BUTTONS: Fragment.MANAGER.SIDENAV.IButton[] = [
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

export const BUTTONS_SUPPORT: Fragment.MANAGER.SIDENAV.IButton[] = [
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