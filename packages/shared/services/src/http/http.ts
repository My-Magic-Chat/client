import { object } from '@utilities';

export abstract class Http {
    private _config: RequestInit = {};

    private get config() { return this._config; }
    private set config(data: Partial<RequestInit>) { this._config = data; }

    private static async handle(response: Response) {
        const status = response.status;
        const success = response.ok;

        let json: any;

        try {
            json = await response.json();
        } catch (error) {
            json = undefined;
        }

        const data = { status, response: json };

        if (!success) { throw data; }

        return data;
    }

    public setConfig(config: RequestInit) {
        this.config = { ...config };
        return this;
    }

    protected formatUrl(baseUrl: string, path: string, params = {}) {
        const query = object.serialize(params);
        const url = [baseUrl, path].filter(i => i).join('/');

        return `${url}${query || ''}`;
    }

    protected async post<T>(url: string, body: any): Promise<T> {
        this.config.method = 'POST';
        this.config.body = JSON.stringify(body);
        return this.send(url);
    }

    protected async get<T>(url: string): Promise<T> {
        this.config.method = 'GET';
        return this.send(url);
    }

    private async send(url: string): Promise<any> {
        return fetch(url, this.config as any)
            .then(response => Http.handle(response as unknown as Response))
            .then(handle => handle && handle.response)
            .catch(e => {
                console.log('error', e);
            });
    }
}
