// Given an array arr of unsorted numbers and a target sum, count all triplets in it 
// such that arr[i] + arr[j] + arr[k] < target where i, j, and k are three different indices. 
// Write a function to return the list of all such triplets instead of the count.
// Input: [-1, 0, 2, 3], target=3 
// Output: [-1, 0, 3], [-1, 0, 2]

function triplet_with_smaller_sum(arr, target) {
  arr.sort((a, b) => a - b);
  const triplets = [];
  for (i = 0; i < arr.length - 2; i++) {
    search_pair(arr, target - arr[i], i, triplets);
  }
  return triplets;
}

function search_pair(arr, target_sum, first, triplets) {
  let left = first + 1,
    right = arr.length - 1;
  while ((left < right)) {
    if (arr[left] + arr[right] < target_sum) { // found the triplet
      // since arr[right] >= arr[left], therefore, we can replace arr[right] by any number between
      // left and right to get a sum less than the target sum
      for (i = right; i > left; i--) {
        triplets.push([arr[first], arr[left], arr[i]]);
      }
      left += 1;
    } else {
      right -= 1; // we need a pair with a smaller sum
    }
  }
}

// Test
console.log(triplet_with_smaller_sum([-1, 0, 2, 3], 3));
console.log(triplet_with_smaller_sum([-1, 4, 2, 1, 3], 5));

// Time: sorting the array will take O(n log(n)). The searchPair(), in this case, will take O(n^2); 
// the main while loop will run in O(n) but the nested for loop can also take O(n) 
// this will happen when the target sum is bigger than every triplet in the array.
// Overall searchTriplets() will take O(n log(n) + n^3),
// which is asymptotically equivalent to O(n^3).
// Space: O(n) which is required for sorting.
