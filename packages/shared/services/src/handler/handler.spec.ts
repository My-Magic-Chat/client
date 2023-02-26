import { Handler } from './handler';
import * as MESSAGES from './messages';

describe('Handler', () => {
    let handler: Handler;

    it('should get api message error', () => {
        handler = new Handler({ path: 'SSO', id: 403 }, 'api');
        expect(handler.message).toBe(MESSAGES.API.SSO[403]);
    });

    it('should get application message error', () => {
        handler = new Handler({ path: 'INPUTS', id: 'email' }, 'application');
        expect(handler.message).toBe(MESSAGES.APPLICATION.INPUTS['email']);
    });
});

