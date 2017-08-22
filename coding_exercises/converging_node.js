/***************************************************************************************************
  Given two singly-linked lists of (possibly) differing lengths that converge at some point,
  find the node at which they converge.
***************************************************************************************************/

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

const find_converging = (first_start, second_start) => {
  let hashTableA = {};
  let hashTableB = {};

  while (first_start) {
    hashTableA[first_start.value] = true;
    first_start = first_start.next;
  }

  while (second_start) {
    hashTableB[second_start.value] = true;
    second_start = second_start.next;
  }

  for (let key in hashTableA) {
    if (hashTableB[key]) return key;
  }

  return null;
};

var nodeA = new Node('A');
var nodeB = nodeA.next = new Node('B');
var nodeC = nodeB.next = new Node('C');
var nodeD = nodeC.next = new Node('D');
var nodeE = nodeD.next = new Node('E');

var node1 = new Node('1');
var node2 = node1.next = new Node('B');
var node3 = node2.next = new Node('3');
var node4 = node3.next = new Node('4');
var node5 = node4.next = new Node('5');
console.log(find_converging(nodeA, node1));
