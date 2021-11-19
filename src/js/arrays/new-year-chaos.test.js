import getMinimumBribes from "./new-year-chaos";

describe('Get Minimum Bribes', () => {
    it('prints "Too chaotic" if someone bribes more than 2 people', () => {
        console.log = jest.fn();
        getMinimumBribes([4, 1, 2, 3])
        expect(console.log).toHaveBeenCalledWith('Too chaotic');
    })

    it('prints minimum bribes if 1 person has bribed 1 or 2 people', () => {
        console.log = jest.fn()
        getMinimumBribes([1,2,3,5,4,6,7,8])
        expect(console.log).toHaveBeenCalledWith(1)
    })

    it('prints minimum bribes if multiple persons have bribed 1 or 2 people', () => {
        console.log = jest.fn()
        getMinimumBribes([1, 2, 5, 3, 7, 8, 6, 4])
        expect(console.log).toHaveBeenCalledWith(7)
    })

    it('print minimum bribes correctly when one person has been bribed but its current position is its original position', () => {
        console.log = jest.fn()
        getMinimumBribes([3, 2, 1])
        expect(console.log).toHaveBeenCalledWith(3)
    })
})