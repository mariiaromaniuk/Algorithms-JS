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
