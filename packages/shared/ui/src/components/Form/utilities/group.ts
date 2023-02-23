import { FormControl } from './control';
import { AbstractControl, Handle, Validator } from './interface';

export class FormGroup<T> {
    private _valid!: boolean;
    private _controls!: AbstractControl<T>;

    public handle: Handle<T>;
    public validator: Validator;

    constructor(controls: AbstractControl<T>, handle: Handle<T> = {}, validator: Validator = {}) {
        this.handle = handle;
        this.controls = controls;
        this.validator = validator;

        this.validate();
    }

    public get controls() { return this._controls; }
    public set controls(control: AbstractControl<T>) {
        this._controls = { ...this._controls, ...control };
    }

    public get values(): any {
        const values: { [key: string]: any } = {};

        this.eachControl((control, key) => ({ [key as string]: control.value }))
            .forEach(control => { for (const prop in control) { values[prop] = control[prop]; } });

        return values;
    }

    public get errors() {
        return Object.values<FormControl<T>>(this.controls as any).filter((i) => i.error);
    }

    public get isValid(): boolean { return this._valid; }
    public set isValid(validity: boolean) { this._valid = validity; }

    public get isDirty(): boolean {
        return Boolean(this.eachControl((control) => control.dirty).find(i => i));
    }

    private eachControl(fn: (control: FormControl<T>, key?: string) => any) {
        return Object.keys(this.controls).map(k => {
            return fn(this.controls[k], k);
        });
    }

    public setValues(partialForm: Partial<T>) {
        for (const key of Object.keys(partialForm)) {
            this.controls[key].value = partialForm[key];
        }
    }

    public dirty(): void {
        this.eachControl((control) => control.dirty = true);
    }

    public validate() {
        Object.keys(this.validator).forEach(key => { this.validator[key](this); });
        this.isValid = !this.errors.length;
    }
}
