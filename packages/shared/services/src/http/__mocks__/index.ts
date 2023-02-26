import { Http } from '../http';

export class Dummy extends Http {
    static params: any = {};
    static path: string;

    constructor() { super(); }

    private get url() {
        return this.formatUrl('http://dummy.com.br', Dummy.path, Dummy.params);
    }

    public path(path: string): this {
        Dummy.path = path;
        return this;
    }

    public params(params: any): this {
        Dummy.params = params;
        return this;
    }

    public get(): Promise<any> {
        return super.get(this.url);
    }
}

export const getMockedSuccessResponse = (response: any): Promise<Response> => {
    return Promise.resolve({
        json: () => Promise.resolve(response),
        url: '',
        ok: true,
        status: 200
    }) as Promise<Response>;
};

export const setHeaders = (METHOD: 'GET' | 'POST' | 'PUT' | 'DELETE' | 'PATCH', headers: any = {}) => ({
    headers,
    method: METHOD
});