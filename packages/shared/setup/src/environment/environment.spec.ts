import Environment from './environment';

describe('Environment', () => {
    beforeEach(() => {
        new Environment({
            env: process.env.REACT_APP_ENV
        });
    });

    it('Should set env', () => {
        expect(Environment.env).toBe(process.env.REACT_APP_ENV);
    });
});