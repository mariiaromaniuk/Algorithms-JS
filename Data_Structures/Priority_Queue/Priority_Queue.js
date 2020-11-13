// Priority Queue is an extension of queue with following properties.
// 1. Every item has a priority associated with it.
// 2. An element with high priority is dequeued before an element with low priority.
// 3. If two elements have the same priority, they are served according to their order in the queue.

// Priority Queue Implementation using Min Binary Heap (lower number means higher priority):
// Each Node has a val and a priority. Use the priority to build the heap.
// Enqueue method accepts a value and priority, makes a new node, and puts it in the right spot based of its priority.
// Dequeue method removes root element, returns it, and rearranges heap using priority.

class Node {
  constructor(val, priority){
    this.val = val;
    // the lower the number the higher it needs to be in the array
    this.priority = priority; 
  }
}

class PriorityQueue {
  constructor(){
    this.values = [];
  }

  enqueue(val, priority){
    let node = new Node(val, priority);
    this.values.push(node);
    this.bubbleUp();
  }

  bubbleUp(){
    //the last element in the array
    let idx = this.values.length - 1;
    const element = this.values[idx];
    // until we reach the front
    while (idx > 0){
      // count backwards to find the parent index
      let parentIdx = Math.floor((idx - 1)/2);
      let parent = this.values[parentIdx];
      // if it's a higher number, parent has more priority, so break
      if (element.priority >= parent.priority) 
         break;
      this.values[parentIdx] = element;
      this.values[idx] = parent;
      idx = parentIdx;
    }
  }

  dequeue(){
    // highest priority item at the top
    const min = this.values[0]; 
    const end = this.values.pop();
    // the last item in array
    if (this.values.length > 0){
      // swap first val with last val?
      this.values[0] = end;
      this.sinkDown();
    }
    return min;
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
        // if the index is inside the array
        leftChild = this.values[leftChildIdx];
        if (leftChild.priority < element.priority){
          swap = leftChildIdx;
        }
      }
      if (rightChildIdx < length){
        rightChild = this.values[rightChildIdx];
        if ((swap === null && rightChild.priority < element.priority) ||
            (swap !== null && rightChild.priority < leftChild.priority)){
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
let ER = new PriorityQueue();
ER.enqueue("common cold",5);
ER.enqueue("gunshot wound", 1);
ER.enqueue("high fever",4);
ER.enqueue("broken arm",2);
ER.enqueue("glass in foot",3);
