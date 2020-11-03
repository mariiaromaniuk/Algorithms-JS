// Given an array of integers and a number, write a function which finds the maximum sum of 
// a subarray with the length of the number passed to the function.
// Note: that a subarray must consist of consecutive elements from the original array.

// OPTION 1 --> O(n^2)
function maxSubarraySum(arr, num){
  if (arr.length < num) 
    return null;

  let max = -Infinity;
  for (let i = 0; i < arr.length - num + 1; i++){
    let temp = 0;
    for (let j = 0; j < num; j++) 
      temp += arr[i + j];
    if (temp > max) 
      max = temp;
  }
  return max;
};

// OPTION 2 --> O(n)
function maxSubarraySum(arr, num){
  if (num > arr.length)
    return null;

  let maxSum = 0;
  let tempSum = 0;
  for (let i = 0; i < num; i++)
    maxSum += arr[i];

  tempSum = maxSum;
  for (let i = num; i < arr.length; i++){
    tempSum = tempSum - arr[i-num] + arr[i];
    maxSum = Math.max(maxSum, tempSum);
  }
  return maxSum;
}

let arr1 = [1, 2, 5, 2, 8, 1, 5];
let arr2 = [4, 2, 1, 6];
let arr3 = [];

// Test
console.log(maxSubarraySum(arr1, 2)); // 10
console.log(maxSubarraySum(arr1, 4)); // 17
console.log(maxSubarraySum(arr2, 1)); // 6
console.log(maxSubarraySum(arr2, 4)); // 13
console.log(maxSubarraySum(arr3, 4)); // null
