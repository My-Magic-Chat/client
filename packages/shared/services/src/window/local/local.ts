import { isBrowser } from '@utilities';

import { Base } from '../../base';
import { TKey } from './interface';

class Local extends Base {
    public get teste() { return this.get('teste'); }
    public set teste(value: string) { this.set('teste', value); }

    public has(key: TKey): boolean {
        return key in window.localStorage;
    }

    private get<T>(key: TKey, encrypt = false): T {
        const data = isBrowser() ? localStorage.getItem(`${key}`) : '';
        return encrypt && data ? JSON.parse(window.atob(data)) : data;
    }

    private set(key: TKey, value: string, encrypt = false): void {
        if (isBrowser()) {
            if (value) {
                const data = encrypt ? window.btoa(JSON.stringify(value)) : value;
                localStorage.setItem(`${key}`, data);
            } else {
                this.remove(key);
            }
        }
    }

    private remove(key: TKey) {
        !isBrowser() || localStorage.removeItem(`${key}`);
    }

    public clear() {
        !isBrowser() || localStorage.clear();
    }
}

export default new Local();
