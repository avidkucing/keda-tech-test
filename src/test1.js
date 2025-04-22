// Test 1

// 1. Manual sort descending
function sortDescending(arr) {
    for (let i = 0; i < arr.length - 1; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[i] < arr[j]) {
                let temp = arr[i];
                arr[i] = arr[j];
                arr[j] = temp;
            }
        }
    }
    return arr;
}

// 2. Max subarray sum with given length
function maxSubarraySum(arr, num) {
    if (arr.length < num) return null;
    let max = -Infinity;
    for (let i = 0; i <= arr.length - num; i++) {
        let temp = 0;
        for (let j = 0; j < num; j++) {
            temp += arr[i + j];
        }
        if (temp > max) max = temp;
    }
    return max;
}

// 3. Sum of all even numbers in a nested object
function nestedEvenSum(obj) {
    let sum = 0;
    function helper(o) {
        for (let key in o) {
            if (typeof o[key] === 'object' && o[key] !== null) {
                helper(o[key]);
            } else if (typeof o[key] === 'number' && o[key] % 2 === 0) {
                sum += o[key];
            }
        }
    }
    helper(obj);
    return sum;
}

module.exports = { sortDescending, maxSubarraySum, nestedEvenSum };
