// Write a binarySearch function that accepts a sorted array and a value. 
// Search through array to see if value is in array. If found return index, if not return -1.

function binarySearch(arr, val){
  let left = 0;
  let right = arr.length-1;
  let middle = Math.floor((left + right)/2);

  while (arr[middle] !== val && left <= right){
    // if value is too small move the left pointer up one
    if (val < arr[middle]) 
      right = middle - 1;
    else 
      left = middle + 1;
    middle = Math.floor((left + right)/2);
  }

  if (arr[middle] === val) 
    return middle;

  return -1;
}

const arr = [1, 2, 3, 4, 5, 10, 13, 44];
console.log(binarySearch(arr, 44));
