// Sliding Window Pattern useful when we're keeping track of a subset of data in a larger data set

// Given an array of positive numbers and a positive number ‘k’, 
// find the maximum sum of any contiguous subarray of size ‘k’.
// Note: that a subarray must consist of consecutive elements from the original array.


// OPTION 1 --> O(n), O(1)
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


// OPTION 2 --> O(n), O(1)
function max_sub_array_of_size_k(k, arr){
  if (k > arr.length)
    return null;
  
  let maxSum = 0,
    windowSum = 0,
    windowStart = 0;

  for (windowEnd = 0; windowEnd < arr.length; windowEnd++){
    windowSum += arr[windowEnd]; // add the next element
    // slide the window, we don't need to slide if we've not hit the required window size of 'k'
    if (windowEnd >= k - 1){
      maxSum = Math.max(maxSum, windowSum);
      windowSum -= arr[windowStart]; // subtract the element going out
      windowStart++; // slide the window ahead
    }
  }
  return maxSum;
}

// Test
console.log(`Maximum sum of a subarray of size K: ${max_sub_array_of_size_k(3, [2, 1, 5, 1, 3, 2])}`);
console.log(`Maximum sum of a subarray of size K: ${max_sub_array_of_size_k(2, [2, 3, 4, 1, 5])}`);
console.log(`Maximum sum of a subarray of size K: ${max_sub_array_of_size_k(2, [])}`);
