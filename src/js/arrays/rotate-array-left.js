export default function rotateArrayToLeft(a, d) {
    const headIndex = d % a.length
    const head = a.splice(0, headIndex)
    return a.concat(head)
}