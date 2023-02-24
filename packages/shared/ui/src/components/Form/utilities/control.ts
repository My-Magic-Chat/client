import { Validator } from '@services/validator/validator';

import { Control, IMessage, TType } from './interface';
import { MESSAGES } from './messages';

export class FormControl<K> {
    protected _error = '';
    protected _value!: K;
    protected _name!: string;
    protected _dirty!: boolean;
    protected _disabled!: boolean;
    protected _required!: boolean;
    protected _type: TType = 'text';

    private static validator: Validator = new Validator();

    public get value(): K { return this._value; }
    public set value(value: K) {
        this._value = value;
        this.validate();
    }

    public get disabled() { return this._disabled; }
    public set disabled(disabled: boolean) { this._disabled = disabled; }

    public get name() { return this._name; }
    public set name(name: string) { this._name = name; }

    public get required() { return this._required; }
    public set required(required: boolean) { this._required = required; }

    public get dirty() { return this._dirty; }
    public set dirty(dirty: boolean) { this._dirty = dirty; }

    public get type() { return this._type; }
    public set type(type: TType) { this._type = type; }

    public get error() { return this._error; }
    public set error(error: string) { this._error = error; }

    public get isValid() {
        return this.dirty ? !this.error : true;
    }

    constructor(control: Control<K>) {
        this.value = control.value;
        this.disabled = Boolean(control.disabled);
        this.required = Boolean(control.required);

        if (control.type) { this.type = control.type; }

        this.validate();
    }

    public validate(): void {
        const data: any = {};

        data.required = this.required && FormControl.validator.isEmpty(this.value);
        data.email = this.type === 'email' && !FormControl.validator.isValidEmail(this.value as string);
        data.tel = this.type === 'tel' && !FormControl.validator.isValidCel(this.value as string);

        const hasError = Object.keys(data).some(key => data[key]);

        if (hasError) {
            const att = Object.keys(data).find(key => data[key]) as keyof IMessage;
            this.error = MESSAGES[att](this.name);
        } else {
            this.error = '';
        }
    }
}
