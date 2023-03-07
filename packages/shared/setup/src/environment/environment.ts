import { IEnvironment, IURL } from './interface';

export default class Environment {
    static env: string;
    static domain: string;
    static baseUrl: string;

    static url: IURL;

    constructor(data: IEnvironment) {
        Environment.env = data.env;
        Environment.url = data.url;
        Environment.domain = data.domain;
        Environment.baseUrl = data.baseUrl;
    }
}