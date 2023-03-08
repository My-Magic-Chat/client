import Environment from './environment';

describe('Environment', () => {
    beforeEach(() => {
        new Environment({
            env: process.env.ENV,
            domain: process.env.DOMAIN,
            baseUrl: process.env.BASE_URL,
            url: {
                sso: process.env.SSO_URL,
                manager: process.env.MANAGER_URL
            }
        });
    });

    it('Should set env', () => {
        expect(Environment.env).toBe(process.env.ENV);
    });
});