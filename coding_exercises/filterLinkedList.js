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
    let node = new Node(val);
    if (this.isEmpty()) {
      this.head = this.tail = node;
    } else {
      node.prev = this.tail;
      this.tail = node;
      this.tail.prev.next = this.tail;
    }

    return this.tail;
  }

  pop() {
    if (this.isEmpty()) {
      return null;
    } else {
      let tail = this.tail;
      this.tail = this.tail.prev;
      tail.delete();
      return tail.value;
    }
  }

  remove(val) {
    if (!this.isEmpty()) {
      let node = this.head;
      while (node) {

        if (node.value === val) {
          if (node === this.head) {
            this.head = this.head.next;
            node.delete();
            break;
          } else if (node === this.tail) {
            this.tail = this.tail.prev;
            node.delete();
            break;
          } else {
            node.delete();
            break;
          }
        }

        node = node.next;
      }
    }
  }

  filter(val) {
    if (!this.isEmpty()) {
      let node = this.head;

      while (node) {

        if (node.value === val){
          if (node === this.head) {
            this.head = this.head.next;
            node.delete();
          } else if (node === this.tail) {
            this.tail = this.tail.prev;
            node.delete();
          } else {
            node.delete();
          }
        }

        node = node.next;
      }
    }
  }

  log() {
    let node = this.head;
    let result = [];
    while (node) {
      result.push(node.value);
      node = node.next;
    }
    console.log(result);
  }
}

let list = new DoublyLinkedList();
list.push('one');
list.push('three');
list.push('two');
list.push('three');
list.push('four');
list.push('three');
list.filter('three');
list.remove('one');

list.log();
