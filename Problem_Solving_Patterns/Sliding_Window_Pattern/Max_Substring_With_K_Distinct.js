// Given a string, find the length of the longest substring in it with no more than K distinct characters.
// Input: String="araaci", K=2
// Output: 4 -> The longest substring with no more than '2' distinct characters is "araa".

function max_substring_with_k_distinct(str, k) {
  let windowStart = 0,
    maxLength = 0,
    charFrequency = {};

  // try to extend the range [window_start, window_end]
  for (let windowEnd = 0; windowEnd < str.length; windowEnd++) {
    const rightChar = str[windowEnd];
    if (!(rightChar in charFrequency)) 
      charFrequency[rightChar] = 0;

    charFrequency[rightChar] += 1;
    // shrink the sliding window, until we are left with 'k' distinct characters in the char_frequency
    while (Object.keys(charFrequency).length > k) {
      const leftChar = str[windowStart];
      charFrequency[leftChar] -= 1;
      if (charFrequency[leftChar] === 0) 
        delete charFrequency[leftChar];
     
      windowStart += 1; // shrink the window
    }
    // remember the maximum length so far
    maxLength = Math.max(maxLength, windowEnd - windowStart + 1);
  }
  return maxLength;
}


// Test
console.log(`Length of the longest substring: ${max_substring_with_k_distinct('araaci', 2)}`); // 4
console.log(`Length of the longest substring: ${max_substring_with_k_distinct('araaci', 1)}`); // 2
console.log(`Length of the longest substring: ${max_substring_with_k_distinct('cbbebi', 3)}`); // 5


// Time: O(n), where ‘n’ is the number of characters in the input string.
// Space: O(k), as we will be storing a maximum of ‘k + 1’ characters in the HashMap.
