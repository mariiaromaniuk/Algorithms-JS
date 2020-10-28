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

console.log(maxSubarraySum(arr1, 2)); // 10
console.log(maxSubarraySum(arr1, 4)); // 17
console.log(maxSubarraySum(arr2, 1)); // 6
console.log(maxSubarraySum(arr2, 4)); // 13
console.log(maxSubarraySum(arr3, 4)); // null


// ---------------------------------------------------------------------------------------- 
// Write a function which accepts two parameters - an array of positive integers and a positive 
// integer. The function should return the minimal length of a contiguous subarray of which the 
// sum is greater than or equal to the integer passed to the function. If there is none, return 0.

function minSubArrayLen(arr, num){
  let total = 0;
  let start = 0;
  let end = 0;
  let minLen = Infinity;
   
  while (start < arr.length){
    // if current window doesn't add up to the given sum then move the window to right
    if (total < num && end < arr.length){
      total += arr[end];
      end++;
    }
    // if current window adds up to at least the sum given then we can shrink the the window
    else if (total >= num){
      minLen = Math.min(minLen, end-start);
      total -= arr[start];
      start++;
    }
    // current total less than require but we reach the end
    else 
      break;
  }
  return minLen === Infinity ? 0 : minLen;
}

let arr1 = [2, 3, 1, 2, 4, 4];
let arr2 = [2, 1, 6, 5, 4];
let arr3 = [3, 1, 7, 11, 2, 9, 8, 21, 62, 33, 19];
let arr4 = [1, 4, 16, 22, 5, 7, 8, 9, 10];
let arr5 = [4, 3, 3, 8, 1, 2, 3];

console.log(minSubArrayLen(arr1, 7)); // 2
console.log(minSubArrayLen(arr2, 9)); // 2
console.log(minSubArrayLen(arr3, 52)); // 1


// ---------------------------------------------------------------------------------------- 
// Given a string, find the length of the longest substring in it with no more than K distinct characters.
// Input: String="araaci", K=2
// Output: 4 -> The longest substring with no more than '2' distinct characters is "araa".

function max_substring_with_k_distinct(str, k) {
  let windowStart = 0,
    maxLength = 0,
    charFrequency = {};

  // try to extend the range [window_start, window_end]
  for (let windowEnd = 0; windowEnd < str.length; windowEnd++) {
    const rightChar = str[windowEnd];
    if (!(rightChar in charFrequency)) 
      charFrequency[rightChar] = 0;

    charFrequency[rightChar] += 1;
    // shrink the sliding window, until we are left with 'k' distinct characters in the char_frequency
    while (Object.keys(charFrequency).length > k) {
      const leftChar = str[windowStart];
      charFrequency[leftChar] -= 1;
      if (charFrequency[leftChar] === 0) 
        delete charFrequency[leftChar];
     
      windowStart += 1; // shrink the window
    }
    // remember the maximum length so far
    maxLength = Math.max(maxLength, windowEnd - windowStart + 1);
  }
  return maxLength;
}


console.log(`Length of the longest substring: ${max_substring_with_k_distinct('araaci', 2)}`); // 4
console.log(`Length of the longest substring: ${max_substring_with_k_distinct('araaci', 1)}`); // 2
console.log(`Length of the longest substring: ${max_substring_with_k_distinct('cbbebi', 3)}`); // 5