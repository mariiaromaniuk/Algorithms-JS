// Array Implementation of the Queue - First In First Out
class Queue {
  constructor(){
    // array in which we store the value
    this.data = [];
  }

  // Add value to the top of the queue
  enqueue(val){
    this.data.push(val);
  }
  
  // Remove value from the top of the queue
  dequeue(){
    return this.data.shift();
  }
  
  // Get the element at the front of the queue without removing it
  peek(){
    return !this.isEmpty() ? this.data[0] : undefined;
  }
  
  // Check if queue is empty
  isEmpty(){
    return this.data.length === 0;
  }
  
  // Get the length of the queue
  length(){
    return this.data.length;
  }
  
  // Reverse the queue
  reverse(index){
    if (index != 0)
      this.reverse(index - 1);
    console.log(this.data[index]);
  }
}


// -------------------------------------------------------------
//  Linked List Implementation of the Queue - First In First Out
class Node {
  constructor(val){
    this.val = val;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }

  // Add value to the end of the queue
  enqueue(val){
    let node = new Node(val);
    if (!this.first){
      this.first = node;
      this.last = node;
    } else {
      let currLast = this.last;
      this.last = node;
      node.next = currLast;
    }
    return this.size++;
  }
  
  // Remove value from beginning of the queue
  dequeue(){
    if (!this.first) 
      return null;
    if (this.first === this.last)
      this.last = null;
    
    let toDelete = this.first;
    this.first = toDelete.next;
    this.size--;
    return toDelete.val;
  }
}
