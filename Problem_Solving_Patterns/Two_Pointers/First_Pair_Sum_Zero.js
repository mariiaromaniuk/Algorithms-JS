
// Write a function which accepts a sorted array of integers. The function should find the 
// first pair where the sum is 0. Return an array that includes both values that sum to zero 
// or undefined if a pair does not exist.

// Time: O(n)
function sumZero(arr){
  if (!arr.length) 
    return undefined;

  let left = 0;
  let right = arr.length - 1;

  while (left < right){
    if (arr[left] + arr[right] > 0) 
      right--;
    else if (arr[left] + arr[right] < 0) 
      left++;
    else if (arr[left] + arr[right] === 0) 
      return [arr[left], arr[right]];
  }
}

// Test
console.log(sumZero([-3, -2, -1, 0, 3])); // [-3, 3]
console.log(sumZero([-3, -1, 0, 1, 2, 4])); // [-1, 1]
console.log(sumZero([-4, -3, -2, -1, 0, 1, 2, 5])); // [-2, 2]
