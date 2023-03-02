export interface IToast {
    mode: TMode;
    show: boolean;
    title: string;
    timeout?: number;
    autoClose?: boolean;
    description?: string;
}

export type TMode = 'danger' | 'success' | 'warning' | 'info';