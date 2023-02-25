import { convertToNumber } from './number';

describe('convertToNumber', () => {
    it('should convert to number when receive string number', () => {
        expect(convertToNumber('3')).toBe(3);
    });

    it('should return null when receive empty string', () => {
        expect(convertToNumber('')).toBeNull();
    });

    it('should return null when receive invalid string', () => {
        expect(convertToNumber('bb')).toBeNull();
    });
});

