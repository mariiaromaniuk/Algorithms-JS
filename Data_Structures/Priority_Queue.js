class Node {
  constructor(value, priority){
    this.value = value;
    // the lower the number the higher it needs to be in the array
    this.priority = priority; 
  }
}

class PriorityQueue {
  constructor(){
    this.values = [];
  }

  enqueue(val, priority){
    let newNode = newNode(val, priority);
    this.values.push(newNode);
    this.bubbleUp();
  }

  bubbleUp(){
    //the last element in the array
    let index = this.values.length - 1;
    const element = this.values[index];
    // until we reach the front
    while (index > 0){
      // count backwards to find the parent index
      let parentIndex = Math.floor((index - 1) / 2);
      let parent = this.values[parentIndex];
      // if it's a higher number, parent has more priority, so break
      if (element.priority >= parent.priority) 
         break;
      this.values[parentIndex] = element;
      this.values[index] = parent;
      index = parentIndex;
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
      let leftChild, rightChildIdx;
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
