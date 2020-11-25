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
    const newNode = new Node(val);
    if (!this.root){
      this.root = newNode;
      return this;
    }
    let curr = this.root;
    while (curr){
      if (val === curr.val) 
        return undefined;
      if (val < curr.val){
        if (!curr.left){
          curr.left = newNode;
          return this;
        }
        curr = curr.left;
      } else {
        if (!curr.right){
          curr.right = newNode;
          return this;
        } 
        curr = curr.right;
      }
    }
  }

  // BREADTH FIRST SEARCH
  // Time: O(n), Space: O(w) where w is the maximum width of the tree
  // Use less space in the call stack (gueue) for thin and long trees
  
  // 1. create a queue and array 'visited' (to store the values of visited nodes)
  // 2. place the root node in the queue
  // 3. loop as long as there is anything in the queue
  // 4. dequeue a node from the queue and push its value into visited array
  // 5. if the node has a left child - add it to the queue
  // 6. if the node has a right child - add it to the queue
  // 7. return the visited array
  
  // To implement Queue we can simply use an array (instead of Queue class) + arr.push() and arr.shift()
  // arr.shift() → removes the first element from an array and returns that removed element.
  
  BFS(){
    let node = this.root,
        visited = [],
        queue = []; 
    queue.push(node);
    
    // dequeue a node from the queue and push its value into visited
    // if there is a left val of this node - add it to the queue
    // if there is a right val of this node - add it to the queue
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
  
  // 1. create an array 'visited' to store the values of visited nodes
  // 2. write a helper function that accepts a node
  // 3. push the value of the node to 'visited' array
  // 4. if the node has a left child, recursively call the helper function on the left child
  // 5. if the node has a right child, recursively call the helper function on the right child
  // 6. invoke the helper function with the current node
  // 7. return the array of values 
 
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
