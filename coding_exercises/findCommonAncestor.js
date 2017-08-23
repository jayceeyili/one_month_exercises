/***************************************************************************************************
  Write a function to find the lowest common ancestor of two nodes in a binary search tree.
  Assume I give you both the root and the two nodes.
***************************************************************************************************/

const findCommonAncestor = (root, node1, node2) => {
  if (!root) return;

  let rootVal = root.value;
  let val1 = node1.value;
  let val2 = node2.value;

  if (val1 < rootVal && val2 < rootVal) {
    return findCommonAncestor(root.left, node1, node2);
  }

  if (val1 > rootVal && val2 > rootVal) {
    return findCommonAncestor(root.right, node1, node2);
  }

  return root;
};
