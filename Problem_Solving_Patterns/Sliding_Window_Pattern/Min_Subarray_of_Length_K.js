// Write a function which accepts two parameters - an array of positive integers and a positive 
// integer. The function should return the minimal length of a contiguous subarray of which the 
// sum is greater than or equal to the integer passed to the function. If there is none, return 0.

// OPTION 1
function smallest_subarray_with_given_sum(arr, num){
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

// Test
console.log(smallest_subarray_with_given_sum([2, 3, 1, 2, 4, 4], 7)); // 2
console.log(smallest_subarray_with_given_sum([2, 1, 6, 5, 4], 9)); // 2
console.log(smallest_subarray_with_given_sum([3, 1, 7, 11, 2, 9, 8, 21, 62, 33, 19], 52)); // 1


// OPTION 2
function smallest_subarray_with_given_sum(arr, s) {
  let windowSum = 0,
    minLength = Infinity,
    windowStart = 0;

  for (windowEnd = 0; windowEnd < arr.length; windowEnd++) {
    windowSum += arr[windowEnd]; // add the next element
    // shrink the window as small as possible until the 'window_sum' is smaller than 's'
    while (windowSum >= s) {
      minLength = Math.min(minLength, windowEnd - windowStart + 1);
      windowSum -= arr[windowStart];
      windowStart += 1;
    }
  }

  if (minLength === Infinity) {
    return 0;
  }
  return minLength;
}

// Test
console.log(`Smallest subarray length: ${smallest_subarray_with_given_sum([2, 1, 5, 2, 3, 2], 7)}`);
console.log(`Smallest subarray length: ${smallest_subarray_with_given_sum([2, 1, 5, 2, 8], 7)}`);
console.log(`Smallest subarray length: ${smallest_subarray_with_given_sum([3, 4, 1, 1, 6], 8)}`);


// Time: O(n). The outer for loop runs for all elements and the inner processes each element only once.
// Space: O(1).
