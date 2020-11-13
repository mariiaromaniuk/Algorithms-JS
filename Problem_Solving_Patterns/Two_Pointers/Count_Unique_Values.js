// Write a function which accepts a sorted array and counts the unique values in the array. 
// Tere can be negative numbers in the array, but it will alway be sorted.

function countUniqueValues(arr){
  if (!arr.length) 
    return 0;
  
  let count = 0;
  for (let i = 0; i < arr.length; i++){
      count++;
      while (arr[i] === arr[i+1]) i++;
  }
  return count;
}

// Test
console.log(countUnqiueValues([1, 1, 1, 1, 1, 1, 2])); // 2
console.log(countUnqiueValues([1, 2, 3, 4, 4, 4, 5, 5, 12, 12, 13])); // 7
console.log(countUnqiueValues([])); // 0
console.log(countUnqiueValues([-2, -1, -1, 0, 1])); // 4
