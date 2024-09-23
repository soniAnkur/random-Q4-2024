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
}

let bst = new BST();
bst.add(-11);
bst.add(-8)
bst.add(2);
bst.add(-3);
bst.add(4);
bst.add(-5);

bst.add(-11);
bst.add(2);
bst.add(-324);
bst.add(34);
bst.add(-12);

// console.log(bst, '\n min ', bst.findMin(), 'min loop', bst.findMinWHileLoop(), '\n max ', bst.findMax(), 'max loop', bst.findMaxWhileLoop())
console.log(bst.find(-5));
console.log(bst.findMinHeight());
console.log(bst, bst.inOrder());

