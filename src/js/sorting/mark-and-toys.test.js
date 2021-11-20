import getMaxGifts from './mark-and-toys'

describe('Get Maximum Number of Gifts Mark can buy with a given budget' , () => {
    it('returns the correct max number when given array is not sorted in ascending order' , () => {
        expect(getMaxGifts([1, 12, 5, 111, 200, 1000, 10], 50)).toBe(4)
    })

    it('returns the correct max number when given array is sorted in ascending order', () => {
        expect(getMaxGifts([1, 5, 10, 12, 111, 200, 1000], 50)).toBe(4)
    })

    it('returns array length when Mark has enough budget for all gifts', () => {
        expect(getMaxGifts([1, 5, 10, 12, 111, 200, 1000], 10000)).toBe(7)
    })

    it('throws an error if budget is negative', () => {
        expect(() => getMaxGifts([10], -1)).toThrow('Introduce a positive number as the budget')
    })
})