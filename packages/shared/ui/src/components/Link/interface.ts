export enum ETarget {
    SELF = '_self',
    BLANK = '_blank',
    PARENT = '_parent',
}

export interface IProps {
    children: React.ReactNode;
    isExternal?: boolean;
    click?: () => any;
    target?: ETarget;
    url?: string;
}
