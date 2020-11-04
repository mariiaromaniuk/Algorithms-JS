// Given two strings, write a function, validAnagram, to determine if the second string is 
// an anagram of the first.  An anagram is a word, phrase or name formed by rearranging the 
// letters of another, such as cinema & iceman.

function validAnagram(str1, str2){
  if (str1.length !== str2.length) 
    return false;

  const charMap = {};
  for (let i = 0; i < str1.length; i++) 
    charMap[str1[i]] ? (charMap[str1[i]] += 1) : (charMap[str1[i]] = 1);
  
  for (let i = 0; i < str2.length; i++) {
    if (!charMap[str2[i]]) 
      return false;
    else 
      charMap[str2[i]] -= 1;
  }
  return true;
};

// Test
let firstStr = "icemannnn";
let secondStr = "cinnnnema";
let thirdStr = "nifeac";
let forthStr = "icefad";
console.log(validAnagram(forthStr, thirdStr));
