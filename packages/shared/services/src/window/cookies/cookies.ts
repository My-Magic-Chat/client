import Cookies, { CookieAttributes } from 'js-cookie';

import { Base } from '../../base';
import { TKey } from './interface';

class Cookie extends Base {
    get userId(): string { return this.get('userId'); }
    set userId(id: string) { this.set('userId', id); }

    private save(key: TKey, data: any, att: CookieAttributes): void {
        Cookies.set(`${key}`, data, att);
    }

    private remove(key: TKey, path?: string) {
        Cookies.remove(`${key}`, { path, domain: this.domain });
    }

    private get<T>(key: TKey, encrypt = false): T {
        const data = Cookies.get(`${key}`);
        const value = encrypt && data ? JSON.parse(atob(data)) : data;
        return data ? value : data;
    }

    private set(key: TKey, data: any, encrypt = false, expires?: number | Date, path?: string) {
        const customDomain = window?.location?.hostname === 'localhost' ? 'localhost' : this.domain;

        if (data) {
            const value = encrypt ? window.btoa(JSON.stringify(data)) : data;
            this.save(key, value, { domain: customDomain, path, expires: expires || 1, });
        } else {
            this.remove(key);
        }
    }
}

export default new Cookie();