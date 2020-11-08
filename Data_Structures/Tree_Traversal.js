class Node {
  constructor(val){
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor(){
    this.root = null;
  }
  
  // Insert value to the tree
  insert(val) {
    const node = new Node(val);
    if (!this.root){
      this.root = node;
      return this;
    }
    else {
      let p = this.root;
      if (val === p.val){
        return undefined;
      } 
      else if (val < p.val){
        while (val < p.val && p.left)
          p = p.left;
        node.left = p.left;
        p.left = node;
      } 
      else {
        while (val > p.val && p.right)
          p = p.right;
        node.right = p.right;
        p.right = node;
      }
    }
  }

  // BREADTH FIRST SEARCH
  // 1. create a queue & a variable (aaray) to store the values of nodes visited
  // 2. place the root node in the queue
  // 3. loop as long as there is anything in the queue
  // 4. dequeue a node from the queue and push the value of the node into the variable that stores the nodes
  // 5. if there is a left property on the node dequeued, add it to the queue
  // 6. if there is a right property on teh node dequeued - add it to the queue
  // 7. return the variable that stores the values
  
  // To implement Queue we can simply use an array (instead of Queue class) + arr.push() and arr.shift()
  // arr.shift() → removes the first element from an array and returns that removed element.
  BFS(){
    let node = this.root,
        visited = [],
        queue = []; 
    queue.push(node);
    
    while (queue.length){
      node = queue.shift();
      visited.push(node.val);
      if (node.left) 
         queue.push(node.left);
      if (node.right) 
         queue.push(node.right);
      }
    return visited;
   }

  // DEPTH FIRST SEARCH
  // 1. create a variable to sotre the values of the nodes visited
  // 2. store the root of the BST in a variable called current
  // 3. write a helper function that accepts a node
  // 4. push the value of the node to the variable that stores the values
  // 5. if the node has a left property, call the helper function with the left property on the node
  // 6. if the node has a right property, call the helper function with the right prperty on the node
  // 7. invoke the helper function with the current variable
  // 8. return the array of values 
  DFSPreOrder(){
    let visited = [];
    let current = this.root;
    function traverse(node) {
      visited.push(node.value);
      if (node.left) 
         traverse(node.left);
      if (node.right) 
         traverse(node.right);
    }
    traverse(current)
    return visited;
  }

  DFSPostOrder(){
    let visited = [];
    let current = this.root;
    function traverse(node) {
      if (node.left) 
         traverse(node.left);
      if (node.right) 
         traverse(node.right);
      visited.push(node.value);
    }
    traverse(current);
    return visited;
  }

  DFSInOrder() {
    let visited = [];
    let current = this.root;
    function traverse(node) {
      if (node.left) 
         traverse(node.left);
      visited.push(node.value);
      if (node.right) 
         traverse(node.right);
    }
    traverse(current);
    return visited;
  }
  
}

// Test
var tree = new BinarySearchTree();
tree.insert(10);
tree.insert(6);
tree.insert(15);
tree.insert(3);
tree.insert(8);
tree.insert(20);
console.log("pre", tree.DFSPreOrder());
console.log("post", tree.DFSPostOrder());
console.log("in", tree.DFSInOrder());
