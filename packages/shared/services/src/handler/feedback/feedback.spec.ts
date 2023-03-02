import { Feedback } from './feedback';
import * as MESSAGES from '../messages';

describe('Feedback', () => {
    let feedback: Feedback;

    describe('API', () => {
        beforeEach(() => {
            feedback = new Feedback('api');
        });

        it('should get api message error', () => {
            const message = feedback.message({ id: 'auth/too-many-requests', path: 'SSO' });
            expect(message).toBe(MESSAGES.API.SSO['auth/too-many-requests']);
        });

        it('should get default message when there is no custom message', () => {
            const message = feedback.message({ id: 'nao-existe', path: 'SSO' });
            expect(message).toBe(MESSAGES.DEFAULT);
        });
    });

    describe('APPLICATION', () => {
        beforeEach(() => {
            feedback = new Feedback('application');
        });

        it('should get application message error', () => {
            const message = feedback.message({ id: 'email', path: 'INPUTS' });
            expect(message).toBe(MESSAGES.APPLICATION.INPUTS['email']);
        });

        it('should get default message when there is no custom message', () => {
            const message = feedback.message({ id: 'nao-existe', path: 'INPUTS' });
            expect(message).toBe(MESSAGES.DEFAULT);
        });
    });
});

