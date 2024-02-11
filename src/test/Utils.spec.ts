import { toUpperCase } from "../app/Utils";


describe('Utils Test suite', () => {
    test('should return uppercase', () => {
        const result = toUpperCase('abc');
        expect(result).toBe('ABC');
    })
});