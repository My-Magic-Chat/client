import Session from './Session';

describe('Session Module', () => {
    const defaultValue = 'Testando módulo Session storage';

    beforeEach(() => {
        Session.userSessionKey = defaultValue;
    });

    it('Should set and get Session storage correctly', () => {
        expect(Session.userSessionKey).toBe(defaultValue);
        expect(Session.has('userId')).toBeTruthy();
    });

    it('Should clear Session storage', () => {
        Session.clear();
        expect(Session.has('userId')).toBeFalsy();
    });

    it('Should remove key on Session storage', () => {
        expect(Session.has('userId')).toBeTruthy();

        Session.userSessionKey = '';
        expect(Session.has('userId')).toBeFalsy();
    });

    it('Should return a empty string when window is not defined', () => {
        Object.defineProperty(global, 'window', { value: undefined });

        expect(Session.userSessionKey).toEqual('');
    });
});
