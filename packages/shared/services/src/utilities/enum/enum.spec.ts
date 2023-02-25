import { getByDescription } from './enum';

enum EMap {
    A = 0,
    B = 1,
    C = 2
}

describe('Enum ', () => {
    describe('getByDescription', () => {
        it('should return correct key', () => {
            const RESULT = getByDescription(EMap, EMap.A);

            expect(RESULT).toEqual('A');
        });

        it('should return undefined with description do not exist', () => {
            const RESULT = getByDescription(EMap, 3);

            expect(RESULT).toEqual(undefined);
        });

        it('should throw error when dont receive enumerator', () => {
            expect(() => getByDescription('string', 'nao_exite')).toThrowError('Function expect enumerator');
        });
    });
});
