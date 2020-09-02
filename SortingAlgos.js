// BUBBLE SORT ------------------------------
// Time: O(n^2), Space: O(1)
function bubbleSort(arr){
	for (let i = 0; i < arr.length; i++){
  	for (let j = 0; j < arr.length-i-1; j++){
    	if (arr[j] > arr[j+1]){
      	let temp = arr[j];
        arr[j] = arr[j+1];
        arr[j+1] = temp;
      }
    }
  }
  return arr;
}



// INSERTION SORT ------------------------------
// Time: O(n^2), Space: O(1)
function insertionSort(arr){
  for (let i = 1; i < arr.length; i++){
    let curr = arr[i];
    let j = i-1;
    while (j >= 0 && arr[j] > curr){
        arr[j+1] = arr[j];
        j--;
    }
    arr[j+1] = curr;
  }
  return arr;
}



// SELECTION SORT ------------------------------
// Time: O(n^2), Space: O(1)
function selectionSort(arr){
  for (let i = 0; i < arr.length; i++){
    let minIndex = i;
    for (let j = i+1; j < arr.length; j++){
      if(arr[minIndex] > arr[j]){
        minIndex = j;
      }
    }
    let temp = arr[i];
    arr[i] = arr[minIndex];
    arr[minIndex] = temp;      
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

// OPTION 1
function quickSort(arr, first = 0, last = arr.length-1){
    let partitionPoint;
    if (first < last){
        partitionPoint = partition(arr, first, last);
        quickSort(arr, first, partitionPoint-1);
        quickSort(arr, partitionPoint+1, last);
    }
}
// partition helper function
function partition(arr, first, last){
    let pivot = arr[first];
    let small = first; // index of the last small element
    
    for (let i = first+1; i <= last; i++){
        if (arr[i] < pivot){
            small++;
            swap(arr[i], arr[small]);
        }
    }
    swap(arr[first], arr[small]);
    return small;
}
// swap helper function
function swap(num1, num2){
  let temp = num1;
  num1 = num2;
  num2 = temp;
}

// OPTION 2
function partition(arr, left, right, pivot){
  // swap elements while left bound <= right bound
  while (left <= right){
    // move left pointer until we find
    // an element that is greater than our pivot element
    // this element will get "pushed" to the right
    while (arr[left] < pivot) left++;
    // move right pointer until we find
    // an element that is less than our pivot element
    // this element will get "pushed" to the left
    while (arr[right] > pivot) right--;

    if (left <= right) {
      // after swapping elements, move left and right 
      // pointers towards each other.
      [arr[left], arr[right]] = [arr[right], arr[left]];
      left++;
      right--;
    }
  }
  // after our left and right pointers cross (i.e. left > right),
  // the left pointer will mark the division between
  // elements greater than and less than the pivot element. 
  return left;
}

function quickSort(arr, left = 0, right = arr.length-1){
  // base case: we are done when the left and right bounds meet.
  if (left >= right) return;
  // we are choosing the middle element of the current partition
  // (but the pivot element can be any element in the arr)
  const pivot = arr[Math.floor((left + right) / 2)];

  // partition the arr around our chosen pivot element.
  // after each partition, elements greater
  // than the pivot element will accumulate to the right of the arr,
  // and elements less than the pivot element will accumulate to the left.
  // the value of `index` marks this division. 
  const index = partition(arr, left, right, pivot);

  // recurse on each of the two partitions:
  // 1) the partition with elements greater than the pivot element.
  // 2) the partition with elements less than the pivot element.
  // (the partition in which the pivot element itself lands depends on the 
  // implementation of the partition function and is not an important detail.)
  quickSort(arr, left, index - 1);
  quickSort(arr, index, right);
}
