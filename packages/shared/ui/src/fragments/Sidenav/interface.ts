export interface IProps {
    buttons: {
        main: Array<IButton>;
        support: Array<IButton>;
    };
    goToInitial: () => void;
    handleClick: (path: string) => void;
}

export interface IButton {
    label: string;
    badge?: string;
    path: string;
    icon: string;
}