/***************************************************************************************************
  Given a binary tree, write a function to check whether it’s a binary search tree or not.
***************************************************************************************************/

// traversal the tree and keep comparing the current value with the previous one, if the current < previous
// return false;
class Node {
  constructor(val) {
    this.value = val;
    this.left = null;
    this.right = null;
  }
}

const is_bst = (root, arr = []) => {
  if (root && root.left) {
    is_bst(root.left, arr);
  }
  arr.push(root.value);
  if (root && root.right) {
    is_bst(root.right, arr);
  }

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] <= arr[i - 1]) return false;
  }
  return true;
};


let root = new Node(5);
root.left = new Node(9);
root .right = new Node(7);
root.left.left = new Node(2);
root.left.right = new Node(4);
root.right.left = new Node(6);
root.right.right = new Node(8);

console.log(is_bst(root));
// is_bst(root);
