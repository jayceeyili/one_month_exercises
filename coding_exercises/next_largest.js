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
  // first case: if node.right exists, go there, then find the most left child, that will be the next largest
  if (node.right) {
    node = node.right;
    while (node.left) {
      node = node.left;
    }
    return node;
  } else {
    // second case: if node.right doesn't exist, go up to find the parent which the left child is the
    // current node(node = node.parent), then this parent node will be the result
    while (node.parent) {
      if (node.parent.left === node) {
        return node.parent;
      }
      node = node.parent;
    }
  }
  // otherwise, the input node is already the largest, return null;
  return null;
};
