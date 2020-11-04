// Given a string, find the length of the longest substring which has no repeating characters.
// Input: String="aabccbb"
// Output: 3  -> the longest substring without any repeating characters is "abc".

function no_repeat_substring(str) {
  let windowStart = 0,
    maxLength = 0,
    charIndexMap = {};

  // try to extend the range [windowStart, windowEnd]
  for (let windowEnd = 0; windowEnd < str.length; windowEnd++) {
    const rightChar = str[windowEnd];
    // if the map already contains the 'rightChar', shrink the window from the beginning so that
    // we have only one occurrence of 'rightChar'
    if (rightChar in charIndexMap) {
      // this is tricky; in the current window, we will not have any 'rightChar' after its previous index
      // and if 'windowStart' is already ahead of the last index of 'rightChar', we'll keep 'windowStart'
      windowStart = Math.max(windowStart, charIndexMap[rightChar] + 1);
    }
    // insert the 'rightChar' into the map
    charIndexMap[rightChar] = windowEnd;
    // remember the maximum length so far
    maxLength = Math.max(maxLength, windowEnd - windowStart + 1);
  }
  return maxLength;
}

// Test
console.log(`Length of the longest substring: ${no_repeat_substring('aabccbb')}`);
console.log(`Length of the longest substring: ${no_repeat_substring('abbbb')}`);
console.log(`Length of the longest substring: ${no_repeat_substring('abccde')}`);


// Time: O(n), where n is the number of letters in the input string.
// Space O(k) where k is the number of distinct characters in the input string.
// This also means k <= n, because in the worst case, the whole string might 
// not have any repeating character so the entire string will be added to the HashMap. 
// Since we have a fixed set of characters in the input string (26 English letters), 
// space will be O(1); in this case, we can use a fixed-size array instead of the HashMap.
