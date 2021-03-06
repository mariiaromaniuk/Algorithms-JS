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



// INSERTION SORT ------------------------------
// Time: O(n^2), Space: O(1)
function insertionSort(arr){
  for (let i = 1; i < arr.length; i++){
    let curr = arr[i];
    let j = i - 1;
    while (j >= 0 && arr[j] > curr){
      arr[j + 1] = arr[j];
      j--;
    }
    arr[j + 1] = curr;
  }
  return arr;
}

