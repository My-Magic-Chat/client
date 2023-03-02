import { IData, TOrigin } from '../interface';
import * as MESSAGES from '../messages';

export class Feedback {
    protected static origin: TOrigin;

    constructor(origin: TOrigin) { Feedback.origin = origin; }

    private api(data: IData) {
        const { path, id } = data;
        return MESSAGES['API'][path][id];
    }

    private application(data: IData) {
        const { path, id } = data;
        return MESSAGES['APPLICATION'][path][id];
    }

    public message(data: IData) {
        const message = this[Feedback.origin](data);
        return message || MESSAGES.DEFAULT;
    }
}