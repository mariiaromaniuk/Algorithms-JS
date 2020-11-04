// Given an array of positive numbers and a positive number ‘k’, 
// find the maximum sum of any contiguous subarray of size ‘k’.
// Note: that a subarray must consist of consecutive elements from the original array.


// OPTION 1 --> O(n^2), O(1)
function max_sub_array_of_size_k(k, arr){
  if (arr.length < k) 
    return null;

  let max = -Infinity;
  for (let i = 0; i < arr.length - k + 1; i++){
    let temp = 0;
    for (let j = 0; j < k; j++) 
      temp += arr[i + j];
    if (temp > max) 
      max = temp;
  }
  return max;
};


// OPTION 2 --> O(n), O(1)
function max_sub_array_of_size_k(k, arr){
  if (k > arr.length)
    return null;

  let maxSum = 0;
  let tempSum = 0;
  for (let i = 0; i < k; i++)
    maxSum += arr[i];

  tempSum = maxSum;
  for (let i = k; i < arr.length; i++){
    tempSum = tempSum - arr[i-k] + arr[i];
    maxSum = Math.max(maxSum, tempSum);
  }
  return maxSum;
}


// OPTION 3 --> O(n), O(1)
function max_sub_array_of_size_k(k, arr) {
  let maxSum = 0,
    windowSum = 0,
    windowStart = 0;

  for (window_end = 0; window_end < arr.length; window_end++) {
    windowSum += arr[window_end]; // add the next element
    // slide the window, we don't need to slide if we've not hit the required window size of 'k'
    if (window_end >= k - 1) {
      maxSum = Math.max(maxSum, windowSum);
      windowSum -= arr[windowStart]; // subtract the element going out
      windowStart += 1; // slide the window ahead
    }
  }
  return maxSum;
}

// Test
console.log(`Maximum sum of a subarray of size K: ${max_sub_array_of_size_k(3, [2, 1, 5, 1, 3, 2])}`);
console.log(`Maximum sum of a subarray of size K: ${max_sub_array_of_size_k(2, [2, 3, 4, 1, 5])}`);
console.log(`Maximum sum of a subarray of size K: ${max_sub_array_of_size_k(2, [])}`);
