// Write a function which accepts a sorted array and counts the unique values in the array. 
// Tere can be negative numbers in the array, but it will alway be sorted.

function countUnqiueValues(arr){
  if (!arr.length) 
    return 0;

  let i = 0;
  for (let j = 1; j < arr.length; j++){
    if (arr[i] !== arr[j]) {
      i++;
      arr[i] = arr[j];
    }
  }
  return i + 1;
};

// Test
console.log(countUnqiueValues([1, 1, 1, 1, 1, 1, 2])); // 2
console.log(countUnqiueValues([1, 2, 3, 4, 4, 4, 5, 5, 12, 12, 13])); // 7
console.log(countUnqiueValues([])); // 0
console.log(countUnqiueValues([-2, -1, -1, 0, 1])); // 4
