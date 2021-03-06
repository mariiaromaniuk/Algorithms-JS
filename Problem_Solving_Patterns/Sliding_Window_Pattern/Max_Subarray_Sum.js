// Sliding Window Pattern useful when we're keeping track of a subset of data in a larger data set

// Given an array of positive numbers and a positive number ‘k’, 
// find the maximum sum of any contiguous subarray of size ‘k’.
// Note: that a subarray must consist of consecutive elements from the original array.


// OPTION 1 --> O(n), O(1)
function max_sub_array_of_size_k(k, arr){
  if (k > arr.length)
    return null;

  let maxSum = 0;
  for (let i = 0; i < k; i++)
    maxSum += arr[i];
  let windowSum = maxSum;
  
  for (let i = k; i < arr.length; i++){
    windowSum = windowSum - arr[i-k] + arr[i];
    maxSum = Math.max(maxSum, windowSum);
  }
  return maxSum;
}


// OPTION 2 --> O(n), O(1)
function maxSubarraySum(num, arr){
  if (num > arr.length) 
    return null;
  let maxSum = 0, windowSum = 0, start = 0;
  for (let end = 0; end < arr.length; end++){
    windowSum += arr[end];
    // slide the window, we don't need to slide if we've not hit the required window size of 'k'
    if (end >= num-1){
      maxSum = Math.max(windowSum, maxSum); 
      windowSum = windowSum - arr[start]; // subtract the element going out
      start++; // slide the window ahead
    }
  }
  return maxSum;
}

// Test
console.log(`Maximum sum of a subarray of size K: ${max_sub_array_of_size_k(3, [2, 1, 5, 1, 3, 2])}`);
console.log(`Maximum sum of a subarray of size K: ${max_sub_array_of_size_k(2, [2, 3, 4, 1, 5])}`);
console.log(`Maximum sum of a subarray of size K: ${max_sub_array_of_size_k(2, [])}`);
