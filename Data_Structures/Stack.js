// Array Implementation of the Stack - Last In First Out
class Stack {
  constructor(){
    // array in which we store the value
    this.data = [];
    // points to the top element index
    this.top = 0;
  }

  // Add value to the top of the stack
  push(val){
    this.data[this.top] = val;
    this.top = this.top + 1;
  }
  
  // Remove value from the top of the stack
  pop(){
    this.top = this.top - 1;
    return this.data.pop(); // removes the last element
  }
  
  // Get the top element of the stack without removing it
  peek(){
    return this.data[this.top - 1];
  }
  
  // Check if stack is empty
  isEmpty(){
    return this.data.length === 0;
  }
  
  // Get the length of the stack
  length(){
    return this.data.length;
  }
  
  // Print out values of the stack
  print(){
    let top = this.top - 1; // because top points to index where new element to be inserted
    while (top >= 0) { // print up to 0th index
      console.log(this.data[top]);
      top--;
    }
  }
  
  // Reverse the stack
  reverse(){
    this.reverseIdx(this.top - 1);
  }
  
  reverseIdx(index){
    if(index != 0)
      this.reverseIdx(index - 1);
    console.log(this.data[index]);
  }
}


// -----------------------------------------------------------
// Linked List Implementation of the Stack - Last In First Out
class Node {
  constructor(val){
    this.val = val;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }

  // Add value to the top of the stack
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
  
  // Remove value from the top of the stack
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
