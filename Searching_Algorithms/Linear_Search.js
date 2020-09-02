// Write a binarySearch function that accepts an array and a value. 
// Search through array to see if value is in array. If found return index, if not return -1.

function linearSearch(arr, val){
  for (let i = 0; i < arr.length; i++){
    if (arr[i] === val) 
      return i;
  }
  return -1;
}

const arr = [1, 2, 3, 4, 5, 13, 44, 6, 10];
console.log(linearSearch(arr, 11));
