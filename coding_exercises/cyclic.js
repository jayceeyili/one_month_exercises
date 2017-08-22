/***************************************************************************************************
  Consider a linked list. Each link in the list holds a next reference to the next item in the list,
  except for the final link, which points to nil.
  It is possible to have a "list" without any end, which loops back on itself. Possibilities:
  A -> B -> C -> A -> ...
  A -> B -> C -> B -> ...
  Write a method cyclic?(first_link), which will return true if a list is cyclic.
  Your first version may use O(n) memory.
  Next, write a version which uses O(1) memory; you'll probably need a different approach.
***************************************************************************************************/

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

const cyclic = first_link => {
  let slow = first_link;
  let fast = first_link;
  let pause = true;

  while (fast = fast.next) {
    if (fast === slow) return true;

    slow = pause ? slow : slow.next;
    pause = !pause;
  }

  return false;
};

var nodeA = new Node('A');
var nodeB = nodeA.next = new Node('B');
var nodeC = nodeB.next = new Node('C');
var nodeD = nodeC.next = new Node('D');
var nodeE = nodeD.next = new Node('E');
nodeE.next = nodeB;
console.log(cyclic(nodeA));
