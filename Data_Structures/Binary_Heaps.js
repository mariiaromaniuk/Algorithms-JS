// Max Binary Heap - Binary Tree where parent nodes are always larger than both child nodes.
// Min Binary Heap - Binary Tree where parent nodes are always smaller than both child nodes.
// A binary heap is as compact as possible. All the children of each node are as full as they 
// can be and left children are filled out first. No relationships between siblings.
// Commonly used in Priority Queue and Graph Traversal

// We can represent Binary Heap using array:
// For any node at index n:
// - Left child is stored at the index 2n + 1
// - Right child is stored at the index 2n + 2
// - Its parent is at Math.floor((n - 1)/2)

class MaxBinaryHeap {
  constructor(){
    this.values = [];
  }
  
  // Insert value into the Binary heap:
  // 1. Push the value into the array ov heap values (will be inserted from left to right)
  // 2. Bubble value up to its correct place (compare with its parent and swap if parent value is smaller)
  insert(element){
    this.values.push(element);
    this.bubbleUp();
  }
  
  bubbleUp(){
    let idx = this.values.length - 1;
    const element = this.values[idx];
    while(idx > 0){
      let parentIdx = Math.floor((idx - 1)/2);
      let parent = this.values[parentIdx];
      if (element <= parent) 
         break;
      this.values[parentIdx] = element;
      this.values[idx] = parent;
      idx = parentIdx;
    }
  }
  
  // Remove item (also called extractMax)
  // 1. Swap the first value in the values property with the last one
  // 2. Pop from the values array, so you can return the value at the end. 
  // 3. Have the new root "sink down" to the correct spot:
  // - Your parent index starts at 0 (the root)
  // - Find the index of the left child: 2 * index + 1 (make sure its not out of bounds)
  // - Find the index of the right child: 2 * index + 2 (make sure its not out of bounds)
  // - If the left or right child is greater than the element - swap. 
  // - If both left and right children are larger, swap with the largest child.
  // - The child index you swapped to now becomes the new parent index. 
  // - Keep looping and swapping until neither child is larger than the element.
  // - Return the old root!
  
  extractMax(){
    const max = this.values[0];
    const end = this.values.pop();
    if (this.values.length > 0){
      this.values[0] = end;
      this.sinkDown();
    }
    return max;
  }
  
  sinkDown(){
    let idx = 0;
    const length = this.values.length;
    const element = this.values[0];
    while (true){
      let leftChildIdx = 2 * idx + 1;
      let rightChildIdx = 2 * idx + 2;
      let leftChild, rightChild;
      let swap = null;

      if (leftChildIdx < length){
        leftChild = this.values[leftChildIdx];
        if (leftChild > element){
          swap = leftChildIdx;
        }
      }
      if (rightChildIdx < length){
        rightChild = this.values[rightChildIdx];
        if ((swap === null && rightChild > element) ||
            (swap !== null && rightChild > leftChild)){
              swap = rightChildIdx;
        }
      }
      if (swap === null) 
         break;
      this.values[idx] = this.values[swap];
      this.values[swap] = element;
      idx = swap;
    }
  }
}

// Test
let heap = new MaxBinaryHeap();
heap.insert(41);
heap.insert(39);
heap.insert(33);
heap.insert(18);
heap.insert(27);
heap.insert(12);
heap.insert(55);
