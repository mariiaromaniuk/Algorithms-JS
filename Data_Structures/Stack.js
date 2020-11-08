class Node {
  constructor(val){
    this.val = val;
    this.next = null;
  }
}

// First In Last Out
class Stack {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }

  // Add value to the beginning of the stack
  push(val){
    let node = new Node(val);
    if (this.size === 0){
      this.first = node;
      this.last = node;
    } else {
      let oldFirst = this.first;
      this.first = node;
      node.next = oldFirst;
    }
    return ++this.size;
  }
  
  // Remove value from beginning of the stack
  pop(){
    if (!this.first) 
      return null;
    if (this.first === this.last)
      this.last = null;
    
    let toDelete = this.first;
    this.first = this.first.next;
    this.size--;
    return toDelete.val;
  }
}
