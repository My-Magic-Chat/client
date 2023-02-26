import cookies from './cookies';

const mockUserId = 'INITIAL_USER_ID';

describe('Cookies Module', () => {
    beforeAll(() => {
        Object.defineProperty(window.document, 'cookie', {
            writable: true,
            value: `userId=${mockUserId}`,
        });
    });

    it('Should return initial cookie value', () => {
        expect(cookies.userId).toBe(mockUserId);
    });

    it('Should update cookie value when setting new value to userId', () => {
        const newUserID = 'NEW_USER_ID';
        cookies.userId = newUserID;

        expect(cookies.userId).toBe(newUserID);
    });
});
