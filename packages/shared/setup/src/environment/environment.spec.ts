import Environment from './environment';

describe('Environment', () => {
    beforeEach(() => {
        new Environment({
            env: process.env.REACT_APP_ENV,
            domain: process.env.REACT_APP_DOMAIN,
            baseUrl: process.env.REACT_APP_BASE_URL,
        });
    });

    it('Should set env', () => {
        expect(Environment.env).toBe(process.env.REACT_APP_ENV);
    });
});