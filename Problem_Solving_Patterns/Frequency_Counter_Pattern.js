// Write a function that accepts 2 arrays. The function should return true if every value in first array 
// has its corresponding squared value in the second array.  The frequency of value must remain the same.

// OPTION 1
function same(arr1, arr2){
    if (arr1.length !== arr2.length)
        return false;

    for (let i = 0; i < arr1.length; i++){
      let correctIdx = arr2.indexOf(arr1[i]**2);
      if (correctIdx === -1)
        return false;
      arr1.splice(correctIdx, 1);
    }
    return true;
}

// OPTION 2 --> O(n)
function same(arr1, arr2){
  if (arr1.length !== arr2.length)
    return false;

  let arr1Map = {};
  let arr2Map = {};

  for (let values of arr1)
    arr1Map[values] = (arr1Map[values] || 0) + 1;

  for (let values of arr2)
    arr2Map[values] = (arr2Map[values] || 0) + 1;

  for (let key in arr1Map){
    if (!(key**2 in arr2Map))
      return false;
  }
  return true;
}

let arr1 = [2, 2, 3, 4];
let arr2 = [4, 9, 4, 16];
let arr3 = [1, 4, 5, 16];
let arr4 = [4, 4, 9, 16, 17];

console.log(same(arr1, arr2));


// ---------------------------------------------------------------------------------------- 
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

let firstStr = "icemannnn";
let secondStr = "cinnnnema";
let thirdStr = "nifeac";
let forthStr = "icefad";

console.log(validAnagram(forthStr, thirdStr));


// ---------------------------------------------------------------------------------------- 
// Given two positive integers, find out if the two numbers have the same frequency of digits.
// Your solution MUST have time complexity: O(n)

function sameFrequency(int1, int2){
  let int1Str = int1.toString()
  let int2Str = int2.toString();

  if (int1Str.length !== int2Str.length)
    return false;

  const frequencyOfInt1 = {};
  for (let char of int1Str)
    frequencyOfInt1[char] = (frequencyOfInt1[char] || 0) + 1;

  const frequencyOfInt2 = {};
  for (let char of int2Str)
    frequencyOfInt2[char] = (frequencyOfInt2[char] || 0) + 1;

  for (let keys in frequencyOfInt1){
    if (frequencyOfInt1[keys] === frequencyOfInt2[keys])
      return true;
    else 
      return false;
    }
}

console.log(sameFrequency(182, 281)) // true;
console.log(sameFrequency(34, 14)) // false;
console.log(sameFrequency(3589578, 5879385)) // true;
console.log(sameFrequency(22, 222)) // false;


// ---------------------------------------------------------------------------------------- 
// Write a function which accepts a variable number of arguments, and checks whether there 
// are any duplicates among the arguments passed in.

function areThereDuplicates(){
  const collection = {};

  for (let values in arguments)
    collection[arguments[values]] = (collection[arguments[values]] || 0) + 1;

  for (let key in collection){
    if (collection[key] > 1)
      return true;
  }
    return false;
}

console.log(areThereDuplicates(1, 2, 3)) // false;
console.log(areThereDuplicates(1, 2, 2)) // true;
console.log(areThereDuplicates('a', 'b', 'c', 'a')) // true;
