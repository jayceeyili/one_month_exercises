/***************************************************************************************************
  Given a node in a Binary Search Tree, find the node with the next largest value.
  Assume you don't have the root of the tree, just a single node from it.
***************************************************************************************************/

class Node {
  constructor(val) {
    this.value = val;
    this.parent = null;
    this.left = null;
    this.right = null;
  }
}

const findNextLargest = node => {
  if (node.right) {
    node = node.right;
    while (node.left) {
      node = node.left;
    }
    return node;
  } else {
    while (node.parent) {
      if (node.parent.left === node) {
        return node.parent;
      }
      node = node.parent;
    }
  }

  return null;
};
