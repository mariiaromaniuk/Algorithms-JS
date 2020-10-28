// BUBBLE SORT ------------------------------
// Time: Average O(n^2), Almost sorted array O(n); Space: O(1)
function bubbleSort(arr){
  // variable to check if there were no swaps
  // for optimization of bubble sort on an almost sorted array
  let noSwaps;
  for (let i = 0; i < arr.length; i++){
    noSwaps = true;
    for (let j = 0; j < arr.length-i-1; j++){
      if (arr[j] > arr[j+1]){
      	let temp = arr[j];
        arr[j] = arr[j+1];
        arr[j+1] = temp;
	noSwaps = false;
      }
    }
    if (noSwaps) break;
  }
  return arr;
}



// INSERTION SORT ------------------------------
// Time: O(n^2), Space: O(1)
function insertionSort(arr){
  for (let i = 1; i < arr.length; i++){
    let curr = arr[i];
    for (let j = i-1; j >= 0 && arr[j] > curr; j--){
        arr[j+1] = arr[j];
    }
    arr[j+1] = curr;
  }
  return arr;
}



// SELECTION SORT ------------------------------
// Time: O(n^2), Space: O(1)
function selectionSort(arr){
  for (let i = 0; i < arr.length; i++){
    let minValIndex = i;
    for (let j = i+1; j < arr.length; j++){
      if (arr[j] < arr[minValIndex])
        minValIndex = j;
    }
    if (i !== minValIndex){ // no need to swap same index
       let temp = arr[i];
       arr[i] = arr[minValIndex];
       arr[minValIndex] = temp; 
    }
  }
  return arr;
}



// MERGE SORT ------------------------------
// Time: O(n log(n)), Space: O(n)
function mergeSort(arr){
  if (arr.length <= 1) return arr;
  let mid = Math.floor(arr.length / 2),
      left = mergeSort(arr.slice(0, mid)),
      right = mergeSort(arr.slice(mid));

  return merge(left, right);
};

function merge(arr1, arr2){
  let sorted = [];
  while (arr1.length && arr2.length) {
    if (arr1[0] < arr2[0]) 
      sorted.push(arr1.shift());
    else 
      sorted.push(arr2.shift());
  };
  return sorted.concat(arr1.concat(arr2));
};



// QUICK SORT ------------------------------
// Time: O(n log(n)), Space: O(log(n))

// Call the pivot helper on the array
// When the helper returns the updated pivot index, recursively call the pivot helper on the subarray to the left of that idx
function quickSort(arr, left = 0, right = arr.length-1){
  if (left < right){
    let pivotIdx = pivot(arr, left, right);
    quickSort(arr, left, pivotIdx-1);
    quickSort(arr, pivotIdx+1, right);
  }
  return arr;
}

// Pivot helper/partition
// Works by selecting one element ('pivot') and finding the index where the pivot should end up in the sorted array
// It should then rearrange the elements in the array so that all values less than the pivot are moved to the left of the pivot, 
// all values greater than the pivot are moved to the right of the pivot.
// The order of elements on either side of picot doesnt matter.
// When complete, the helpers should return the index of the pivot.

function pivot(arr, start = 0, end = arr.length-1) {
  let pivot = arr[start];
  let swapIdx = start;
  for (let i = start+1; i < arr.length; i++) {
    if (pivot > arr[i]) {
      swapIdx++;
      swap(arr, swapIdx, i);
    }
  }
  swap(arr, start, swapIdx);
  return swapIdx;
}

function swap(arr, i, j) {
  let temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
  return arr;
}

const arr = [9,7,8,6,5,3,22,5,4,2,3,10,1];
console.log(quickSort(arr));
