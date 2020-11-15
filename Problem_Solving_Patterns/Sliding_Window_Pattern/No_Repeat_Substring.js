// Given a string, find the length of the longest substring which has no repeating characters.
// Input: String="aabccbb"
// Output: 3  -> the longest substring without any repeating characters is "abc".

function no_repeat_substring(str){
  let start = 0,
      maxLength = 0,
      charMap = {};
  // try to extend the range [start, end]
  for (let end = 0; end < str.length; end++){
    const rightChar = str[end];
    // if the map already contains the 'rightChar', shrink the window from the beginning so that
    // we have only one occurrence of 'rightChar'
    if (rightChar in charMap){
      // in the current window, we will not have any 'rightChar' after its previous index
      // and if 'start' is already ahead of the last index of 'rightChar', we'll keep 'start'
      start = Math.max(start, charMap[rightChar] + 1);
    }
    // insert the 'rightChar' into the map
    charMap[rightChar] = end;
    // remember the maximum length so far
    maxLength = Math.max(maxLength, end - start + 1);
  }
  return maxLength;
}

// Test
console.log(findLongestSubstring('')); // 0 
console.log(no_repeat_substring('rithmschool')); // 7
console.log(no_repeat_substring('thisisawesome')); // 6
console.log(no_repeat_substring('thecatinthehat')); // 7
console.log(no_repeat_substring('bbbbbb')); // 1 
console.log(no_repeat_substring('longestsubstring')); // 8
console.log(no_repeat_substring('thisishowwedoit')); // 6


// Time: O(n), where n is the number of letters in the input string.
// Space O(k) where k is the number of distinct characters in the input string.
// This also means k <= n, because in the worst case, the whole string might 
// not have any repeating character so the entire string will be added to the HashMap. 
// Since we have a fixed set of characters in the input string (26 English letters), 
// space will be O(1); in this case, we can use a fixed-size array instead of the HashMap.
