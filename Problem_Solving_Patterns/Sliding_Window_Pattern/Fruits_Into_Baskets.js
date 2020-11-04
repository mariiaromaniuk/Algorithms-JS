// Fruits into Baskets - Time: O(N), Space: O(1) 
// Given an array of characters where each character represents a fruit tree, you are given two baskets. 
// Write a function to return the maximum number of fruits in both the baskets in a subarray 
// (each basket can have only one type of fruit). You will pick one fruit from each tree until you cannot, 
// i.e., you will stop when you have to pick from a third fruit type.
// Input: ['A','B','C','B','B','C']
// Output: 5  ->  3 'B' in one basket and two 'C' in other - if we start with the second letter: ['B','C','B','B','C']

function fruits_into_baskets(fruits) {
  let windowStart = 0,
    maxLength = 0,
    fruitFrequency = {};

  // try to extend the range [windowStart, windowEnd]
  for (let windowEnd = 0; windowEnd < fruits.length; windowEnd++) {
    const rightFruit = fruits[windowEnd];
    if (!(rightFruit in fruitFrequency)) {
      fruitFrequency[rightFruit] = 0;
    }
    fruitFrequency[rightFruit] += 1;

    // shrink the sliding window, until we are left with '2' fruits in the fruit frequency dictionary
    while (Object.keys(fruitFrequency).length > 2) {
      const leftFruit = fruits[windowStart];
      fruitFrequency[leftFruit] -= 1;
      if (fruitFrequency[leftFruit] === 0) {
        delete fruitFrequency[leftFruit];
      }
      windowStart += 1; // shrink the window
    }
    maxLength = Math.max(maxLength, windowEnd - windowStart + 1);
  }
  return maxLength;
}


// Test
console.log(`Maximum number of fruits: ${fruits_into_baskets(['A', 'B', 'C', 'A', 'C'])}`);
console.log(`Maximum number of fruits: ${fruits_into_baskets(['A', 'B', 'C', 'B', 'B', 'C'])}`);


// Time: O(n), where ‘n’ is the number of characters in the input array. 
// Space: O(1) as there can be a maximum of three types of fruits stored in the frequency map.
