// REVERSE STRING
// Write a function which accepts a string and returns a new string in reverse.
function reverse(str){
  if (str.length <= 1) return str;
  return reverse(str.slice(1)) + str[0];
}

// IS PALINDROME
// Write a function which returns true if the string is a palindrome (reads the same forward and backward). 
function isPalindrome(str){
  if (str.length === 1) return true;
  if (str.length === 2) return str[0] === str[1];
  if (str[0] === str.slice(-1)) 
    return isPalindrome(str.slice(1,-1));
  return false;
}

// SOME RECURSIVE
// Write a function which accepts an array and a callback. The function returns true if a single value in the array returns true when passed to the callback.
function someRecursive(array, callback) {
  if (array.length === 0) return false;
  if (callback(array[0])) return true;
  return someRecursive(array.slice(1),callback);
}

// FLATTEN
// Write a function which accepts an array of arrays and returns a new array with all values flattened.
function flatten(oldArr){
  let newArr = [];
  for (let i = 0; i < oldArr.length; i++){
    if (Array.isArray(oldArr[i]))
      newArr = newArr.concat(flatten(oldArr[i]));
    else 
      newArr.push(oldArr[i]);
  } 
  return newArr;
}

// CAPITALIZE WORDS
// Given an array of words, return a new array containing each word capitalized.
function capitalizeWords (array){
  if (array.length === 1) 
    return [array[0].toUpperCase()];

  let res = capitalizeWords(array.slice(0, -1));
  res.push(array.slice(array.length-1)[0].toUpperCase());
  return res;
}

// NESTED EVEN SUM 
// Return the sum of all even numbers in an object which may contain nested objects.
function nestedEvenSum (obj, sum=0){
  for (let key in obj){
    if (typeof obj[key] === 'object')
      sum += nestedEvenSum(obj[key]);
    else if (typeof obj[key] === 'number' && obj[key] % 2 === 0)
      sum += obj[key];
  }
  return sum;
}

// CAPITALIZE FIRST 
// Given an array of strings, capitalize the first letter of each string in the array.
function capitalizeFirst (array){
  if (array.length === 1) 
    return [array[0][0].toUpperCase() + array[0].substr(1)];

  const res = capitalizeFirst(array.slice(0, -1));
  const string = array.slice(array.length - 1)[0][0].toUpperCase() + array.slice(array.length-1)[0].substr(1);
  res.push(string);
  return res;
}

// STRINGIFY NUMBERS 
// Write a function which takes in an object and finds all of the values which are numbers and converts them to strings.
function stringifyNumbers(obj){
  let newObj = {};
  for (let key in obj){
    if (typeof obj[key] === 'number') 
      newObj[key] = obj[key].toString();
    else if (typeof obj[key] === 'object' && !Array.isArray(obj[key])) 
      newObj[key] = stringifyNumbers(obj[key]);
    else 
      newObj[key] = obj[key];
  }
  return newObj;
}

// COLLECT STRINGS - Recursion Helper
// Write a function which accepts an object and returns an array of all the values in the object that have a typeof string
function collectStrings(obj){
  let stringsArr = [];

  function gatherStrings(o){
    for (let key in o){
      if (typeof o[key] === 'string') 
        stringsArr.push(o[key]);
      else if (typeof o[key] === 'object') 
        return gatherStrings(o[key]);
    }
  }
  gatherStrings(obj);
  return stringsArr;
}

// COLLECT STRINGS - Pure Recursion 
function collectStrings(obj){
  let stringsArr = [];
  for (let key in obj){
    if (typeof obj[key] === 'string') 
      stringsArr.push(obj[key]);
    else if (typeof obj[key] === 'object') 
      stringsArr = stringsArr.concat(collectStrings(obj[key]));
  }
  return stringsArr;
}
