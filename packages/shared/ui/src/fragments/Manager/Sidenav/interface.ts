export interface IProps {
    buttons: Array<IButton>;
    buttonsSupport: Array<IButton>;
    goToInitial: () => void;
    handleClick: (path: string) => void;
}

export interface IButton {
    label: string;
    badge?: string;
    path: string;
    icon: string;
}