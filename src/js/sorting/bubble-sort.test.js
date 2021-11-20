import countSwaps from './bubble-sort'

describe('Get swaps required to sort the array in ascending order using the Bubble Sort algorithm', () => {
    beforeEach(() => {
        console.log = jest.fn()
    })

    it('console.log 0 when the array is already in ascending order', () => {
        countSwaps([1, 2, 3])
        expect(console.log).toHaveBeenCalledWith('Array is sorted in 0 swaps.')
    })

    it("doesn't modify the array if it's already in ascending order", () => {
        countSwaps([1, 2, 3])
        expect(console.log.mock.calls[1][0]).toBe('First Element: 1');
        expect(console.log.mock.calls[2][0]).toBe('Last Element: 3');
    })

    it('when swaps are needed, shows in console the correct num of swaps', () => {
        countSwaps([3, 2, 1])
        expect(console.log.mock.calls[0][0]).toBe('Array is sorted in 3 swaps.');
    })

    it('when swaps are needed, shows in console the first and last elements of the sorted array', () => {
        countSwaps([3, 2, 1, 4])
        expect(console.log.mock.calls[1][0]).toBe('First Element: 1');
        expect(console.log.mock.calls[2][0]).toBe('Last Element: 4');
    })
})