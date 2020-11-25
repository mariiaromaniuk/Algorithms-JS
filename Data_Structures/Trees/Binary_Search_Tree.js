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

  // Remove value from the tree
  // Case 1: The node to be deleted is a leaf.
  // Case 2: The node to be deleted has one child attached to it (left or right).
  // Case 4: The node to be deleted has both children.
  deleteNode(val){
   // If a node is successfully removed, a reference will be received.
   return !(deleteNodeHelper(this.root, val) === false);
  }
}

/*
 Takes root and key and recursively searches for the key.
 If it finds the key, there could be 3 cases:
 
 1. This node is a leaf node.
 
 Example: Removing F
      A
     / \
    B   C
   /   / \
  D   E   F
 
  To remove it, we can simply remove its parent's connection to it.
 
       A
      / \
     B   C
    /    /
   D    E
 
  2. This node is in between the tree somewhere with one child.
 
  Example: Removing B
        A
       / \
      B   C
     /   / \
    D   E   F
 
  To remove it, we can simply make the child node replace the parent node in the above connection
        A
       / \
      D   C
         / \
        E   F
 
  3. This node has both children. This is a tricky case.
 
  Example: Removing C
 
         A
        / \
       B   C
      /   / \
     D   E   F
        /   / \
       G   H   I
 
  In this case, we need to find either a successor or a predecessor of the node and replace this node with
  that. For example, If we go with the successor, its successor will be the element just greater than it,
  ie, the min element in the right subtree. So after deletion, the tree would look like:
 
         A
        / \
       B   H
      /   / \
     D   E   F
        /     \
       G       I
 
  To remove this element, we need to find the parent of the successor, break their link, make successor's left
  and right point to current node's left and right. The easier way is to just replace the data from node to be
  deleted with successor and delete the sucessor.
 */

function deleteNodeHelper(node, val){
  if (!node) 
    return false;
  if (val < node.val){
    node.left = deleteNodeHelper(node.left, val);
    return node;
  } else if (val > node.val){
    node.right = deleteNodeHelper(node.right, val);
    return node;
  } else {
    // 1. No children: leaf node
    if (!node.left && !node.right){
      node = null;
      return node;
    }
    // 2. Single child 
    if (!node.left) return node.right;
    if (!node.right) return node.left;

    // 3. Both children, so need to find successor
    let curr = node.right;
    while (curr.left){
      curr = curr.left;
    }
    node.val = curr.val;
    // Delete the value from right subtree
    node.right = deleteNodeHelper(node.right, curr.val);
    return node;
  }
}

// Check if it's a valid BST
function validate(node){ 
  if (!node)  
    return true;  
  if (node.left && node.left.val > node.val)  
    return false;  
  if (node.right && node.right.val < node.val)  
    return false;  
  if (!validate(node.left) || !validate(node.right))  
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
    return maxNode(node.right)
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
console.log(bst.deleteNode(5));
console.log(bst.search(5));
console.log(bst);


// Time: Insertion: O(log n), Search: O(log n)
