import hourglassMax from './2d-array-hourglass'

describe('Hourglass Max Sum', () => {
    it('allows negative numbers', () => {
        expect(hourglassMax([
            [-9, -9, -9, 1, 1, 1],
            [0, -9, 0, 4, 3, 2],
            [-9, -9, -9, 1, 2, 3],
            [0, 0, 8, 6, 6, 0],
            [0, 0, 0, -2, 0, 0],
            [0, 0, 1, 2, 4, 0]
        ])).toBe(28)
    })

    it('maximum sum can be less than zero', () => {
        expect(hourglassMax([
            [-1, -1, 0, -9, -2, -2],
            [-2, -1, -6, -8, -2, -5],
            [-1, -1, -1, -2, -3, -4],
            [-1, -9, -2, -4, -4, -5],
            [-7, -3, -3, -2, -9, -9],
            [-1, -3, -1, -2, -4, -5]
        ])).toBe(-6)
    })

    it('gets a positive sum if all numbers are positive', () => {
        expect(hourglassMax([
            [1, 1, 1, 0, 0, 0],
            [0, 1, 0, 0, 0, 0],
            [1, 1, 1, 0, 0, 0],
            [0, 0, 2, 4, 4, 0],
            [0, 0, 0, 2, 0, 0],
            [0, 0, 1, 2, 4, 0]
        ])).toBe(19)
    })

    it('must be 3x3 at least', () => {
        expect(hourglassMax([
            [1, 1, 1, 0, 0, 0],
            [0, 1, 0, 0, 0, 0]
        ])).toBe('Introduce a 2d array with at least 3 rows and 3 columns')
    })

    it('can be a non square matrix', () => {
        expect(hourglassMax([
            [1, 1, 1, 0, 0, 0],
            [0, 1, 0, 0, 0, 0],
            [1, 1, 1, 0, 0, 0],
            [0, 0, 2, 4, 4, 0],
        ])).toBe(10)
    })
})