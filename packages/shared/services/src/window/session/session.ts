import { isBrowser } from '@utilities';

import { Base } from '../../base';
import { TKey } from './interface';

class Session extends Base {
    get userSessionKey() {
        return this.get('userId');
    }

    set userSessionKey(value: string) {
        this.set('userId', value);
    }

    public has(key: TKey): boolean {
        return key in window.sessionStorage;
    }

    private get<T>(key: TKey, encrypt = false): T {
        const data = isBrowser() ? sessionStorage.getItem(`${key}`) : '';
        return encrypt && data ? JSON.parse(window.atob(data)) : data;
    }

    private set(key: TKey, value: string, encrypt = false): void {
        if (isBrowser()) {
            if (value) {
                const data = encrypt ? window.btoa(JSON.stringify(value)) : value;
                sessionStorage.setItem(`${key}`, data);
            } else {
                this.remove(key);
            }
        }
    }

    private remove(key: TKey) {
        !isBrowser() || sessionStorage.removeItem(`${key}`);
    }

    public clear() {
        !isBrowser() || sessionStorage.clear();
    }
}

export default new Session();
