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
    
    // Find value in the tree
    find(val){
        if (this.root === null) 
            return false;
        var current = this.root,
            found = false;
        while (current && !found){
            if (val < current.val){
                current = current.left;
            } else if (val > current.val){
                current = current.right;
            } else {
                found = true;
            }
        }
        if (!found) return undefined;
        return current;
    }
    
    
    contains(val){
        if (this.root === null) return false;
        var current = this.root,
            found = false;
        while (current && !found){
            if (val < current.val){
                current = current.left;
            } else if (val > current.val){
                current = current.right;
            } else {
                return true;
            }
        }
        return false;
    }
}

// Test
var tree = new BinarySearchTree();
tree.insert(10)
tree.insert(5)
tree.insert(13)
tree.insert(11)
tree.insert(2)
tree.insert(16)
tree.insert(7)
