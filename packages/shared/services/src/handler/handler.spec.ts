import { Handler } from './handler';
import * as MESSAGES from './messages';

describe('Handler', () => {
    let handler: Handler;

    it('should get api message error', () => {
        handler = new Handler({ path: 'SSO', id: 'auth/user-not-found' }, 'api');
        expect(handler.message).toBe(MESSAGES.API.SSO['auth/user-not-found']);
    });

    it('should get application message error', () => {
        handler = new Handler({ path: 'INPUTS', id: 'email' }, 'application');
        expect(handler.message).toBe(MESSAGES.APPLICATION.INPUTS['email']);
    });

    
    it('should get default message error', () => {
        handler = new Handler({ path: 'INPUTS', id: 'naoexiste' }, 'application');
        expect(handler.message).toBe(MESSAGES.DEFAULT);
    });
});

