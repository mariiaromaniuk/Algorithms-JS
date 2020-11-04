// Write a function which takes two strings and checks whether the characters in the first 
// string form a subsequence of the characters in the second string. In other words, the 
// function should check whether the character in the first string appears somewhere in the 
// second sring, without their order changing.

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

// Test
console.log(isSubsequence('hello', 'hello world')); // true
console.log(isSubsequence('sing', 'sting')); // true
console.log(isSubsequence('abc', 'abracadabra')); // true
console.log(isSubsequence('abc', 'acb')); // false
