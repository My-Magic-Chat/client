export class Timer {
    private _id!: number;
    private _start!: number;
    private _remaining!: number;

    private delay!: number;

    constructor(delay: number) {
        this.delay = delay;
        this.remaining = delay;
    }

    private get id() { return this._id; }
    private set id(value: number) { this._id = value; }

    private get start() { return this._start; }
    private set start(value: number) { this._start = value; }

    public get remaining() { return this._remaining; }
    public set remaining(value: number) { this._remaining = value; }

    public pause() {
        window.clearTimeout(this.id);
        this.remaining -= Date.now() - this.start;
    }

    public resume(callback: () => any) {
        this.start = Date.now();
        this.id = window.setTimeout(() => { callback(); }, this.remaining);
    }

    public reset() {
        this.remaining = this.delay;
    }
}