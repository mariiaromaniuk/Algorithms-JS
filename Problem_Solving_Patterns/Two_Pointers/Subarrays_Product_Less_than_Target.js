// Given an array with positive numbers and a target number, find all of its 
// contiguous subarrays whose product is less than the target number.
// Input: [2, 5, 3, 10], target=30 
// Output: [2], [5], [2, 5], [3], [5, 3], [10]
// There are six contiguous subarrays whose product is less than the target.

const Deque = require('./collections/deque'); //http://www.collectionsjs.com

function find_subarrays(arr, target) {
  let result = [],
    product = 1,
    left = 0;
  for (right = 0; right < arr.length; right++) {
    product *= arr[right];
    while ((product >= target && left < arr.length)) {
      product /= arr[left];
      left += 1;
    }
    // since the product of all numbers from left to right is less than the target therefore,
    // all subarrays from left to right will have a product less than the target too; to avoid
    // duplicates, we will start with a subarray containing only arr[right] and then extend it
    const tempList = new Deque();
    for (let i = right; i > left - 1; i--) {
      tempList.unshift(arr[i]);
      result.push(tempList.toArray());
    }
  }
  return result;
}

// Test
console.log(find_subarrays([2, 5, 3, 10], 30));
console.log(find_subarrays([8, 2, 6, 5], 50));

// Time: main for-loop managing the sliding window takes O(n) but creating subarrays can take up to O(n^2) in the worst case. 
// Therefore overall, our algorithm will take O(n^3).
// Space: ignoring the space required for the output list, the algorithm runs in O(n) space which is used for the temp list.
