class Node {
  constructor(val){
    this.val = val;
    this.next = null;
  }
}

// First In First Out
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
