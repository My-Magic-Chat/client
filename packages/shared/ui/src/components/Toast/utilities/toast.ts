import { IToast, TMode } from './interface';

export class Toast implements IToast {
    private static nextId = 0;

    private _mode!: TMode;
    private _show!: boolean;
    private _title!: string;
    private _timeout!: number;
    private _autoClose!: boolean;
    private _description!: string;

    public id = `toast_${++Toast.nextId}`;

    constructor(data: IToast) {
        this.mode = data.mode;
        this.title = data.title;
        this.show = data.show;

        if (data.timeout) { this.timeout = data.timeout; }
        if (data.autoClose) { this.autoClose = data.autoClose; }
        if (data.description) { this.description = data.description; }
    }

    get show() { return this._show; }
    set show(show: boolean) { this._show = show; }

    get mode() { return this._mode; }
    set mode(mode: TMode) { this._mode = mode; }

    get title() { return this._title; }
    set title(title: string) { this._title = title; }

    get description() { return this._description; }
    set description(description: string) { this._description = description; }

    get timeout() { return this._timeout; }
    set timeout(timeout: number) { this._timeout = timeout; }

    get autoClose() { return this._autoClose; }
    set autoClose(autoClose: boolean) { this._autoClose = autoClose; }
}