export default function hourglassMaxSum(arr) {
    if(arr.length < 3 || arr[0].length < 3) {
        return 'Introduce a 2d array with at least 3 rows and 3 columns'
    }

    // Init maxSum as Number.MIN_SAFE_INTEGER because maxSum can be negative
    let maxSum = Number.MIN_SAFE_INTEGER

    for(let i = 0; i < arr.length - 2; i++) {
        for(let j = 0; j < arr[i].length - 2; j++) {
            const sum = 
                arr[i][j] + arr[i][j+1] + arr[i][j+2] +
                arr[i + 1][j + 1] + arr[i + 2][j] + 
                arr[i + 2][j+1] + arr[i + 2][j + 2]
            if(sum > maxSum) {
                maxSum = sum
            }
        }
    }

    return maxSum
}