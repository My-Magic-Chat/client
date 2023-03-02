import { TIcon } from '@components/Icon';

import { IToast } from './utilities/interface';

export interface IProps extends IToast {
    id: string;
    close: (id: string) => any;
}

export interface IMode {
    [x: string]: {
        icon: TIcon;
        theme: TTheme;
        color: 'mode' | 'text';
    }
}

type TTheme = 'red' | 'green' | 'yellow' | 'blue';