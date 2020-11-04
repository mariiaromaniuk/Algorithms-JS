// Given a sorted array of integers, write a function called search, that accepts a value and returns 
// the index where the value passed to the function is located, if the value is not found, return -1.

// OPTION 1
function search(arr, val){
  let left = 0;
  let right = arr.length - 1;

  while (left <= right){
    let middle = Math.floor((left + right)/2);
    let current = arr[middle];
    
    if (arr[middle] < val) 
      left = middle + 1;
    else if (arr[middle] > val) 
      right = middle - 1;
    else 
      return middle;
  }
  return -1;
};

// OPTION 2 --> O(n)
function search(arr, searchNum){
  for (let i = 0; i < arr.length; i++){
    if (searchNum === arr[i]) 
      return i;
  }
  return -1;
}

// Test
let arr1 = [1, 2, 3, 4, 5, 6];
console.log(search(arr1, 4)); // 3
console.log(search(arr1, 6)); // 5
console.log(search(arr1, 10)); // -1
