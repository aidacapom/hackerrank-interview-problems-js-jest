export default function countSwaps(arr) {
    let swaps = 0
    
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length - 1; j++) {
            // Swap adjacent elements if they are in decreasing order
            if (arr[j] > arr[j + 1]) {
                swap(arr, j, j + 1);
                swaps++
                //console.log(arr)
            }
        }
    }
    
    console.log(`Array is sorted in ${swaps} swaps.`)
    console.log(`First Element: ${arr[0]}`)
    console.log(`Last Element: ${arr[arr.length - 1]}`)
}

function swap(arr, i, j) {
    const temp = arr[i]
    arr[i] = arr[j]
    arr[j] = temp
}