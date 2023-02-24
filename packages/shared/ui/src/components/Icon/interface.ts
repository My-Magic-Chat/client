export interface IProps extends React.HTMLAttributes<SVGElement> {
    icon: TIcon;
    size?: ESize;
    theme: TTheme;
    animation?: 'rotate';

}

export enum ESize {
    SMALL = '12px',
    MID = '18px',
    BIG = '24px'
}

type TTheme = 'brand' | 'accent' | 'mode' | 'text' | 'gray' | 'green' | 'red' | 'blue' | 'yellow';

export type TIcon =
    'copy'
    | 'info'
    | 'check'
    | 'close'
    | 'search'
    | 'loading'
    | 'attention'
    | 'check-circle';
