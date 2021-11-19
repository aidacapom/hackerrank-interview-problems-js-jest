import rotateArrayToLeft from "./rotate-array-left"

describe('Left Rotation Operation on an Array', () => {
    it('works when the number of rotations is bigger than the array length', () => {
        expect(rotateArrayToLeft([1, 2, 3], 4)).toEqual([2, 3, 1])
    })

    it('works when the number of rotations is smaller than the array length', () => {
        expect(rotateArrayToLeft([1, 2, 3], 1)).toEqual([2, 3, 1])
    })

    it('negative number of rotations throws an error', () => {
        /* La función que arroja una excepción necesita ser invocada dentro de una función de envoltorio, 
         * de lo contrario la afirmación toThrow fallará
         */
        expect(() => rotateArrayToLeft([1, 2, 3], -1)).toThrow('Introduce a positive number of rotations')
    })

    it('0 rotations return the given array', () => {
        expect(rotateArrayToLeft([1, 2, 3], 0)).toEqual([1, 2, 3])
    })
})