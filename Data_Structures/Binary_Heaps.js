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

// Insert value into the Binary heap:
// 1. Push the value into the array ov heap values (will be inserted from left to right)
// 2. Bubble value up to its correct place (compare with its parent and swap if parent value is smaller)

class MaxBinaryHeap {
  constructor(){
    this.values = [];
  }
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
}

let heap = new MaxBinaryHeap();
heap.insert(41);
heap.insert(39);
heap.insert(33);
heap.insert(18);
heap.insert(27);
heap.insert(12);
heap.insert(55);
