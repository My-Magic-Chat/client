import { IData } from './interface';

export class Base {
    static data: Partial<IData> = {};

    protected get domain() { return Base.data.domain; }
}
