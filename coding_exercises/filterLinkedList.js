/***************************************************************************************************
  Write a double-ended LinkedList class in JavaScript.
  You should have a Link class
  It should keep a reference to next and prev.
  You should have a LinkedList class
  It should have first and last methods to return the first/last links in the list,
  or undefined if the list is empty.
  It should have push and pop methods.
  You should write a remove method that takes in a value and removes the first link found with that value.
  Given a linked list of integers and an integer value, delete every node of the linkedlist containing that value.
***************************************************************************************************/

// classes: Node, DoublyLinkedList
// methods: first() => firstNode, last() => lastNode, push(val), pop() => val, remove(val), filter(val) => list

class Node {
  constructor(val = null) {
    this.value = val;
    this.prev = null;
    this.next = null;
  }

  delete() {
    if (this.prev) this.prev.next = this.next;
    if (this.next) this.next.prev = this.prev;
    this.value = null;
  }
}

class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  isEmpty() {
    return this.head === null && this.tail === null;
  }

  first() {
    if (!this.isEmpty()) {
      return this.head;
    } else {
      return undefined;
    }
  }

  last() {
    if (!this.isEmpty()) {
      return this.tail;
    } else {
      return undefined;
    }
  }

  push(val) {
    
  }

  pop() {

  }

  remove(val) {

  }

  filter(cb) {

  }
}
