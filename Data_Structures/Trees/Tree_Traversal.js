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
  insert(val){
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
  // Time: O(n), Space: O(w) where w is the maximum width of the tree
  // Use less space in the call stack (gueue) for thin and long trees
  
  // 1. create a queue and an array (to store the values of visited nodes)
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
  // Time: O(n), Space: O(h) where h is the maximum width of the tree
  // Use less space in the call stack (gueue) for wide trees
  
  // 1. create a variable to sotre the values of the nodes visited
  // 2. store the root of the BST in a variable called current
  // 3. write a helper function that accepts a node
  // 4. push the value of the node to the variable that stores the values
  // 5. if the node has a left property, call the helper function with the left property on the node
  // 6. if the node has a right property, call the helper function with the right prperty on the node
  // 7. invoke the helper function with the current variable
  // 8. return the array of values 
 
  // DFS Pre-order (recursive, returns array of all values)
  // Used to duplicate or flatten the tree
  DFS_PreOrder(){
    let visited = [];
    function traverse(node){
      visited.push(node.value);
      if (node.left) 
         traverse(node.left);
      if (node.right) 
         traverse(node.right);
    }
    traverse(this.root);
    return visited;
  }
  
  // DFS In-order (recursive, returns array of all values)
  // Sorts values in ascending order (for BST)
  DFS_InOrder(){
    let visited = [];
    function traverse(node){
      if (node.left) 
         traverse(node.left);
      visited.push(node.value);
      if (node.right) 
         traverse(node.right);
    }
    traverse(this.root);
    return visited;
  }

  // DFS Post-order (recursive, returns array of all values)
  DFS_PostOrder(){
    let visited = [];
    function traverse(node){
      if (node.left) 
         traverse(node.left);
      if (node.right) 
         traverse(node.right);
      visited.push(node.value);
    }
    traverse(this.root);
    return visited;
  }
}

// DFS Pre-order (recursive, void, just prints)
// Used to duplicate or flatten the tree
function preOrder(node){
  if (node !== null){
    console.log(node.val);
    preOrder(node.left);
    preOrder(node.right);
  }
}

// DFS In-order (recursive, void, just prints)
// Sorts values in ascending order (for BST)
function inOrder(node){
  if (node !== null){
    inOrder(node.left);
    console.log(node.val);
    inOrder(node.right);
  }
}

// DFS Post-order (recursive, void, just prints)
function postOrder(node){
  if (node !== null){
    postOrder(node.left);
    postOrder(node.right);
    console.log(node.val);
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
console.log("Pre:", tree.DFS_PreOrder());
console.log("Post: ", tree.DFS_PostOrder());
console.log("In: ", tree.DFS_InOrder());
