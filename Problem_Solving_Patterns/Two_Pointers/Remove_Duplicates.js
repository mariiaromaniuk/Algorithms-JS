// Given an array of sorted numbers, remove all duplicates from it. You should not use any extra space; after removing the duplicates in-place return the length of the subarray that has no duplicate in it.
// Input: [2, 3, 3, 3, 6, 9, 9]
// Output: 4  ->  The first four elements after removing the duplicates will be [2, 3, 6, 9].

// Time: O(n), Space: O(1).
function remove_duplicates(arr) {
  // index of the next non-duplicate element
  let nextNonDuplicate = 1;

  let i = 1;
  while (i < arr.length) {
    if (arr[nextNonDuplicate - 1] !== arr[i]) {
      arr[nextNonDuplicate] = arr[i];
      nextNonDuplicate += 1;
    }
    i += 1;
  }

  return nextNonDuplicate;
}

// Test
console.log(remove_duplicates([2, 3, 3, 3, 6, 9, 9]));
console.log(remove_duplicates([2, 2, 2, 11]));
