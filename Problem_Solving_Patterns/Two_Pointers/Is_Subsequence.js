// Write a function which takes two strings and checks whether the characters in the first 
// string form a subsequence of the characters in the second string. In other words, the 
// function should check whether the character in the first string appears somewhere in the 
// second string, without their order changing.

// OPTION 1 --> O(n)
function isSubsequence(str1, str2){
  if (!str1.length)
    return true;
  
  let i = 0;
  let j = 0;

  while (j < str2.length){
    if (str2[j] === str1[i]) 
      i++;
    if (i === str1.length) 
      return true;
    j++;
  }
  return false;
}

// OPTION 2 --> O(n)
function isSubsequence(str1, str2) {
  let map = {};
  for (let i of str2) 
      map[i] = 1;
  for (let j of str1){
      if (!map[j]) return false;
  }
  return true;
}

// OPTION 3 -- > O(n^2)
function isSubsequence(str1, str2) {
  for (let i of str1){
      if (!str2.indexOf(str1[i]))
      return false;
  }
  return true;
}

// OPTION 4 --> Recursive
function isSubsequence(str1, str2) {
  if (!str1.length) return true;
  if (!str2.length) return false;
  if (str2[0] === str1[0]) 
    return isSubsequence(str1.slice(1), str2.slice(1));
  return isSubsequence(str1, str2.slice(1));
}


// Test
console.log(isSubsequence('hello', 'hello world')); // true
console.log(isSubsequence('sing', 'sting')); // true
console.log(isSubsequence('abc', 'abracadabra')); // true
console.log(isSubsequence('abc', 'acb')); // false
