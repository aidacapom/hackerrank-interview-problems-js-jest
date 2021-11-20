export default function getMinimumSwaps(arr) {
    const min = Math.min(...arr)
    let swaps = 0;

    // Since the array elements are consecutive, it is not possible for just one of them to be in the wrong position,
    // so we don't need to analyze the last element
    for (let currentPos = 0; currentPos < arr.length - 1; currentPos++) { 
        while (arr[currentPos] !== currentPos + min) {
            let temp = arr[arr[currentPos] - min]
            arr[arr[currentPos] - min] = arr[currentPos]
            arr[currentPos] = temp
            swaps++  
        }
    }
    
    return swaps;
}

getMinimumSwaps([1, 2, 3, 4, 5, 6])