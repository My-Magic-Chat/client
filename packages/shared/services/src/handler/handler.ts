import { Feedback } from './feedback';
import { IData, TOrigin } from './interface';

export class Handler {
    public message: string;

    constructor(data: IData, origin: TOrigin) {
        const feedback = new Feedback(origin);
        this.message = feedback.message(data);
    }
}