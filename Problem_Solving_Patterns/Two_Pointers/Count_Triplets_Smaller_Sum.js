// Given an array arr of unsorted numbers and a target sum, count all triplets in it 
// such that arr[i] + arr[j] + arr[k] < target where i, j, and k are three different indices. 
// Write a function to return the count of such triplets.
// Input: [-1, 0, 2, 3], target=3 
// Output: 2  ->  There are two triplets whose sum is less than the target: [-1, 0, 3], [-1, 0, 2]

function triplet_with_smaller_sum(arr, target) {
  arr.sort((a, b) => a - b);
  let count = 0;
  for (i = 0; i < arr.length - 2; i++) {
    count += search_pair(arr, target - arr[i], i);
  }
  return count;
}

function search_pair(arr, target_sum, first) {
  let count = 0;
  let left = first + 1,
    right = arr.length - 1;
  while (left < right) {
    if (arr[left] + arr[right] < target_sum) { // found the triplet
      // since arr[right] >= arr[left], therefore, we can replace arr[right] by any number between
      // left and right to get a sum less than the target sum
      count += right - left;
      left += 1;
    } else {
      right -= 1; // we need a pair with a smaller sum
    }
  }
  return count;
}

// Test
console.log(triplet_with_smaller_sum([-1, 0, 2, 3], 3));
console.log(triplet_with_smaller_sum([-1, 4, 2, 1, 3], 5));

// Sorting the array will take O(n log(n)). The searchPair() function will take O(n). 
// As we are calling searchPair() for every number in the input array, 
// overall searchTriplets() will take O(n log(n) + n^2), which is asymptotically equivalent to O(n^2)
// Space: O(n) which is required for sorting if we are not using an in-place sorting algorithm.