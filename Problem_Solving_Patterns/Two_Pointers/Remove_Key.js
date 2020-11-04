// Given an unsorted array of numbers and a target ‘key’, remove all instances of ‘key’ in-place and return the new length of the array.
// Input: [3, 2, 3, 6, 3, 10, 9, 3], Key=3
// Output: 4  ->  The first four elements after removing every 'Key' will be [2, 6, 10, 9].

// Time: O(n), Space: O(1).
function remove_element(arr, key) {
  let nextElement = 0; // index of the next element which is not 'key'
  for (i = 0; i < arr.length; i++) {
    if (arr[i] !== key) {
      arr[nextElement] = arr[i];
      nextElement += 1;
    }
  }
  return nextElement;
}

// Test
console.log(`Array new length: ${remove_element([3, 2, 3, 6, 3, 10, 9, 3], 3)}`);
console.log(`Array new length: ${remove_element([2, 11, 2, 2, 1], 2)}`);
