class Node {
  constructor(data, left = null, right = null) {
    this.data = data;
    this.left = left;
    this.right = right;
  }
}

// TODO delete node
export class BST {
  constructor() {
    this.root = null;
  }

  add(data) {
    const node = this.root;
    if (node == null) {
      this.root = new Node(data);
    } else {
      const searchTree = (node) => {
        if (data < node.data) {
          if (node.left === null) {
            node.left = new Node(data);
            return;
          } else if (node.left !== null) {
            return searchTree(node.left);
          }
        } else if (data > node.data) {
          if (node.right === null) {
            node.right = new Node(data);
            return;
          } else if (node.right !== null) {
            return searchTree(node.right);
          }
        } else {
          return null;
        }
      };
      return searchTree(node);
    }
  }

  findMin() {
    const findMinRecurse = (node) => {
      if (node === null) return null;
      else if (node.left === null) return node.data;
      else return findMinRecurse(node.left);
    };
    return findMinRecurse(this.root);
  }

  findMinWHileLoop() {
    let current = this.root;
    while (current.left) {
      current = current.left;
    }
    return current.data;
  }

  findMax() {
    const findMaxRecurse = (node) => {
      if (node === null) return null;
      else if (node.right === null) return node.data;
      else return findMaxRecurse(node.right);
    };
    return findMaxRecurse(this.root);
  }

  findMaxWhileLoop() {
    let current = this.root;
    while (current.right) {
      current = current.right;
    }
    return current.data;
  }

  find(data) {
    const findRecurse = (node) => {
      if (node === null) return null;
      else {
        if (data == node.data) return node;
        else if (data < node.data) return findRecurse(node.left);
        else if (data > node.data) return findRecurse(node.right);
      }
    };
    return findRecurse(this.root);
  }

  findMinHeight(node = this.root) {
    if (node == null) return -1;
    let left = this.findMinHeight(node.left);
    let right = this.findMinHeight(node.right);
    return (left < right) ? left + 1 : right + 1;
  }


  // DFS -- TODO write down use cases and patterns
  inOrder() {
    if(this.root == null) return null;
    let result = [];
    const traverse = (node) => {
        if(node.left) traverse(node.left);
        result.push(node.data);
        if(node.right) traverse(node.right);
    }
    traverse(this.root);
    return result;
  }

  preOrder() {
    if(this.root == null) return null;
    let result = [];
    const traverse = (node) => {
      result.push(node.data);
      node.left && traverse(node.left);
      node.right && traverse(node.right);
    }
    traverse(this.root);
    return result;
  }


  postOrder() {
    if(this.root == null) return null;
    let result = [];
    const traverse = (node) => {
      node.left && traverse(node.left);
      node.right && traverse(node.right);
      result.push(node.data);
    }
    traverse(this.root);
    return result;
  }

// Fix
  levelOrder() {
    // take node node
    // put it on to Q
    // while loop till Q ius empty
      // DQ and add to result
      // if left add to Q
      // if right add to 
      if(this.root == null) return null;
      let result = [];
      let Q = [];
      Q.push(this.root)
      while(Q.length > 0) {
        let node = Q.shift();
        result.push(node.data);
        node.left && Q.push(node.left)
        node.right && Q.push(node.right);
      }
      return result;
  }
}

let bst = new BST();
bst.add(9)
bst.add(4)
bst.add(17)
bst.add(3)
bst.add(6)
bst.add(22)
bst.add(5)
bst.add(7)
bst.add(20)


// bst.add(-11);
// bst.add(-8)
// bst.add(2);
// bst.add(-3);
// bst.add(4);
// bst.add(-5);

// bst.add(-11);
// bst.add(2);
// bst.add(-324);
// bst.add(34);
// bst.add(-12);

//                     -11
//                       -8
//                         2
//                       -3


// console.log(bst, '\n min ', bst.findMin(), 'min loop', bst.findMinWHileLoop(), '\n max ', bst.findMax(), 'max loop', bst.findMaxWhileLoop())
console.log(bst.find(-5));
console.log(bst.findMinHeight());
console.log(bst.inOrder());
console.log(bst.preOrder());
console.log(bst.postOrder());
console.log(bst.levelOrder());

