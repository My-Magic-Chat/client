import { IEnvironment } from './interface';

export default class Environment {
    static env: string;
    static domain: string;
    static baseUrl: string;

    constructor(data: IEnvironment) {
        Environment.env = data.env;
        Environment.domain = data.domain;
        Environment.baseUrl = data.baseUrl;
    }
}