/*
We are given an array containing positive and negative numbers. Suppose the array contains a number ‘m’ at a particular index. 
If ‘m’ is positive we will move forward ‘m’ indices and if ‘m’ is negative move backwards ‘m’ indices. You should assume that 
the array is circular which means two things:
   1. If, while moving forward, we reach the end of the array, we will jump to the first element to continue the movement.
   2. If, while moving backward, we reach the beginning of the array, we will jump to the last element to continue the movement.
   3. Write a method to determine if the array has a cycle. The cycle should have more than one element and should follow one 
      direction which means the cycle should not contain both forward and backward movements.
Input: [1, 2, -1, 2, 2]
Output: true -> he array has a cycle among indices: 0 -> 1 -> 3 -> 0
*/

function circular_array_loop_exists(arr) {
  for (i = 0; i < arr.length; i++) {
    isForward = arr[i] >= 0; // if we are moving forward or not
    let slow = i,
      fast = i;

    // if slow or fast becomes '-1' this means we can't find cycle for this number
    while (true) {
      // move one step for slow pointer
      slow = find_next_index(arr, isForward, slow);
      // move one step for fast pointer
      fast = find_next_index(arr, isForward, fast);
      if (fast !== -1) {
        // move another step for the fast pointer
        fast = find_next_index(arr, isForward, fast);
      }
      if (slow === -1 || fast === -1 || slow === fast) {
        break;
      }
    }

    if (slow !== -1 && slow === fast) {
      return true;
    }
  }

  return false;
}

function find_next_index(arr, isForward, currentIndex) {
  direction = arr[currentIndex] >= 0;

  if (isForward !== direction) {
    return -1; // change in direction, return -1
  }

  nextIndex = (currentIndex + arr[currentIndex]) % arr.length;
  if (nextIndex < 0) {
    nextIndex += arr.length; // wrap around for negative numbers
  }

  // one element cycle, return -1
  if (nextIndex === currentIndex) {
    nextIndex = -1;
  }

  return nextIndex;
}

// Test
console.log(circular_array_loop_exists([1, 2, -1, 2, 2]));
console.log(circular_array_loop_exists([2, 2, -1, 2]));
console.log(circular_array_loop_exists([2, 1, -1, -2]));


/*
Time: O(n^2), where ‘n’ is the number of elements in the array. This complexity is due to the fact 
that we are iterating all elements of the array and trying to find a cycle for each element.
Space: O(1).

An Alternate Approach:
We don’t keep a record of all the numbers that have been evaluated for cycles. We know that all 
such numbers will not produce a cycle for any other instance as well. If we can remember all the 
numbers that have been visited, our algorithm will improve to O(n) as, then, each number will 
be evaluated for cycles only once. We can keep track of this by creating a separate array 
however the space complexity of our algorithm will increase to O(n).
*/

