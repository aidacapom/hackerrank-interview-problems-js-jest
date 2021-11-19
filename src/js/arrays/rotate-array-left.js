export default function rotateArrayToLeft(a, d) {
    if(d < 0) {
        throw new Error('Introduce a positive number of rotations')
    }
    
    const headIndex = d % a.length
    const head = a.splice(0, headIndex) //head contains the first headIndex elements of the array, which are removed from the array.
    return a.concat(head) //concat() returns a new array, containing the joined arrays; it does not change the existing arrays.
}