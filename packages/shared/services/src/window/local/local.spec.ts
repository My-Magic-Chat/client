import Local from './local';

describe('Local Module', () => {
    const defaultValue = 'Testando módulo Local storage';

    beforeEach(() => { Local.teste = defaultValue; });

    it('Should set and get Local storage correctly', () => {
        expect(Local.teste).toBe(defaultValue);
        expect(Local.has('teste')).toBeTruthy();
    });

    it('Should clear Local storage', () => {
        expect(Local.has('teste')).toBeTruthy();

        Local.clear();
        expect(Local.has('teste')).toBeFalsy();
    });

    it('Should remove key on Local storage', () => {
        expect(Local.has('teste')).toBeTruthy();

        Local.teste = undefined;
        expect(Local.has('teste')).toBeFalsy();
    });

    it('Should return a empty string when window is not defined', () => {
        Object.defineProperty(global, 'window', {
            value: undefined
        });

        expect(Local.teste).toEqual('');
    });
});
