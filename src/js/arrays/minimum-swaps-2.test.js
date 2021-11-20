import getMinimumSwaps from './minimum-swaps-2'

describe('Get Minimum Swaps required to sort the array in ascending order', () => {
    it('returns 0 if the array is already sort in ascending order', () => {
        expect(getMinimumSwaps([1, 2, 3, 4, 5, 6])).toBe(0)
    })
    
    it('returns the min number of swaps when the min number of the array is 1', () => {
        expect(getMinimumSwaps([7, 1, 3, 2, 4, 5, 6])).toBe(5)
    })

    it('returns the min number of swaps when the min number of the array is not 1', () => {
        expect(getMinimumSwaps([11, 10, 12])).toBe(1)
    })
})