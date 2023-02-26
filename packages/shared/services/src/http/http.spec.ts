import { Dummy, getMockedSuccessResponse, setHeaders } from './__mocks__';

describe('Http', () => {
    let dummy: Dummy;
    let path: string;
    let params: any;
    const headers = { 'x-test': 'test value' };
    const url = 'http://dummy.com.br';

    beforeEach(() => {
        dummy = new Dummy();
        params = { name: 'your name' };
        path = 'teste';
        global.fetch = jest.fn(() => getMockedSuccessResponse(path));
    });

    it('Should set path', () => {
        dummy.path(path);
        expect(path).toBe(Dummy.path);
    });

    it('Should set params', () => {
        dummy.params(params);
        expect(params).toBe(Dummy.params);
    });

    it('Should send GET request successfully', async () => {
        dummy.path(path).params({}).setConfig({ headers }).get();
        expect(fetch).toHaveBeenCalledWith(`${url}/${path}`, setHeaders('GET', headers));
    });
});
