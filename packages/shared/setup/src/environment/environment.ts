import { IEnvironment } from './interface';

export default class Environment {
    static env: string;

    constructor(data: IEnvironment) {
        Environment.env = data.env;
    }
}