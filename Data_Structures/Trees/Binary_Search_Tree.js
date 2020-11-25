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

  // Remove value from the tree
  // Case 1: The node to be deleted is a leaf.
  // Case 2: The node to be deleted has one child attached to it (left or right).
  // Case 4: The node to be deleted has both children.
  remove(val){ 
    // root is re-initialized with a root of a modified tree. 
    this.root = this.removeNode(this.root, val); 
  } 
  // Method to remove node with a given value
  // it recur over the tree to find the val and removes it 
  removeNode(node, val){ 
    if (!node) 
      return 'Tree is empty.'; 
    else if (val < node.val)
      node.left = this.removeNode(node.left, val); 
    else if (val > node.val)
      node.right = this.removeNode(node.right, val); 
    else { 
      // Deleting node with no children 
      if (!node.left && !node.right)
        node = null; 
      // Deleting node with one child 
      if (!node.left) node = node.right; 
      else if (!node.right) node = node.left; 

      // Deleting node with two children 
      let s = node.left;
      let trail = null;
      while (s.right) {
        trail = s;
        s = s.right;
      }
      node.val = s.val;
      if (!trail) // if it did not move
        node.left = s.left;
      else
        trail.right = s.left;
    } 
  }
    
  // Find value in the tree
  search(val){
    if (!this.root)
      return false;
    let curr = this.root;
    while (curr){
      if (val < curr.val)
        curr = curr.left;
      else if (val > curr.val)
        curr = curr.right;
      else 
        return true;
    }
    return false;
  }
}

// Check if it's a valid BST
function validate(root){ 
  if (!root)  
    return true;  
  if (root.left && root.left.val > root.val)  
    return false;  
  if (root.right && root.right.val < root.val)  
    return false;  
  if (!validate(root.left) || !validate(root.right))  
    return false;   
  return true;  
}

// Return height of the tree
function height(node){
  if (!node) return 0;
  let leftHeight = height(node.left);
  let rightHeight = height(node.right);
  return Math.max(leftHeight, rightHeight) + 1;
}

// Min value in a BST
function minNode(node){
  if (!node)
    return 0;
  if (node.left)
    return minNode(node.left);
  return node.val;
}

// Max value in a BST
function maxNode(node){
  if (!node)
    return 0;
  if (node.right)
    return maxNode(node.right);
  return node.val;
}

// Print all ancestors of a target node
function printAncestor(node, target){
  if (!node) return false
  if (node.val === target) return true;
  if (printAncestor(node.left, target) || printAncestor(node.rigth, target)){
    console.log(node.val);
    return true;
  }
  return false;
}



function deleteVal(root, val){ 
  if (!root)
      return 'Tree is empty.';
  else if (root.val < val)
      deleteVal(root.right, val);
  else if (root.val > val)
      deleteVal(root.left, val);
  else
      deleteNode(root);
}

function deleteNode(p){  // p is a real tree branch (not just pointer)
  let s = p;   // want to delete p, so we need to save it to s
  if (!p.left)
    p = p.right;
  else if (!p.right)
    p = p.left;
  else {
    s = p.left;
    let trail;
    while (s.right) {
      trail = s;
      s = s.right;
    }
    p.val = s.val;
    if (!trail) // if it did not move
      p.left = s.left;
    else
      trail.right = s.left;
  }
}


// Test
const bst = new BinarySearchTree();
bst.insert(10);
bst.insert(5);
bst.insert(15);
bst.insert(12);
bst.insert(7);
bst.insert(6);
console.log(bst.search(10));
console.log(bst.search(6));
console.log(bst.remove(5));
console.log(bst);


// Time: Insertion: O(log n), Search: O(log n)
