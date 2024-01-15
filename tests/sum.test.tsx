import { sum } from './sum';

describe('sum', () => {
    test('两数之和', () => {
        expect(sum(1, 2)).toBe(3);
    });
})