/***************************************************************************************************
  Jane is hosting a birthday party. In order to treat her guests fairly, she planned on seating
  them around a circular table, in alphabetical order. Jane decided to write a program to keep
  track of the table plan as her guests RSVP'd. She wanted to run the program as the guests
  arrived and allow them to enter their name and find out who the two people the guest will be
  sitting next to. Help Jane out by writing a class that will:
  Level 1:
  allow guests to be added via .add(name) in O(n) time
  allow guests to retrieve a 2 element list of the names of the guests seated next to them,
  ordered [left, right] via .get(name) in O(n) time
  use native arrays/objects as underlying data structure - no high level structures
  Level 2:
  implement a .delete(name) method that allows Jane to remove guests who dont show up in O(n) time
  Level 3:
  increase the performance of any of the 3 methods to O(log n)?
***************************************************************************************************/

class Node {
  constructor(name = null) {
    this.name = name;
    this.prev = null;
    this.next = null;
  }

  delete() {
    if (this.prev) this.prev.next = this.next;
    if (this.next) this.next.prev = this.prev;
    this.prev = this.next = null;
  }
}

class SeatingList {
  constructor() {
    this.head = null;
  }

  empty() {
    return this.head === null;
  }

  add(name) {
    let node = new Node(name);
    if (this.empty()) {
      node.prev = node.next = node;
      this.head = node;
    } else {
      let curr = this.head;
      while (curr.next !== this.head) {
        if (curr.name > name) {
          break;
        }
        curr = curr.next;
      }
      node.next = curr;
      node.prev = curr.prev;
      curr.prev.next = node;
      curr.prev = node;
    }
  }

  get(name) {
    if (this.empty()) {
      return null;
    } else {
      let currGuest = this.head;
      while (currGuest.next !== this.head) {
        if (currGuest.name === name) {
          return [currGuest.prev.name, currGuest.next.name];
        }
        currGuest = currGuest.next;
      }
    }
  }

  delete(name) {
    if (this.empty()) {
      return null;
    } else {
      let currGuest = this.head;
      while (currGuest.next !== this.head) {
        if (currGuest.name === name) {
          break;
        }
        currGuest = currGuest.next;
      }
      currGuest.delete();
    }
  }

  log() {
    console.log(this);
  }
}

let list = new SeatingList();
list.add('d');
list.add('c');
list.add('b');
list.add('a');
// list.delete('b');
// list.log();
console.log(list.get('d'));
