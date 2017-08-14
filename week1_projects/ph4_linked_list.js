/***************************************************************************************************
## Phase 4: Linked List

A [linked list][linked-list-wiki] is a data structure that consists of a
series of links. Each link holds a value and a pointer to the next link (or `nil`).
Given a pointer to the first (or head) link, you can access
any arbitrary link by traversing the links in order.

We will be implementing a special type of linked list called a "doubly linked list" - this means
that each link should also hold a pointer to the previous link. Given a pointer to the last (or tail)
link, we can traverse the list in reverse order.

Our LinkedLists will ultimately be used in lieu of arrays for our HashMap buckets.
In order to make the HashMap work, each link in your linked list will need to store both a key and a value.

The `Link` class is provided for you. It's up to you to implement the
`LinkedList`.

### Making Heads and Tails of `LinkedList`

There are a few ways to implement `LinkedList`. You can either start with head and tail of your
list as `nil`, or start them off as sentinel links. We recommend using sentinel links because
they can help you avoid unnecessary type checking for `nil`.

A sentinel link is merely a "dummy" link that does not hold a value. Your `LinkedList` should keep
track of pointers (read: instance variables) to sentinel links for its head and tail.
The head and tail should never be reassigned.

Given these properties of our `LinkedList`, how might we check if our list is empty?
How might we check if we are at the end of our list? Think about how your linked list will function
as you implement the methods below.

### Methods to Implement

Go forth and implement the following methods:
- `first`
- `empty?`
- `#push(key, val)` - Append a new link to the end of the list.
- `#update(key, val)` - Find an existing link by key and update it's value.
- `#get(key)`
- `#include?(key)`
- `#remove(key)`

Specs await!

Once you're done with those, we're going to also make your linked lists
enumerable. We want them to be just as flexible as arrays. Remember back
to when you wrote `Array#my_each`, and let's get this thing enumerating. The block passed to `#each` will yield to a `link`.

Once you have `#each` defined, you can include the `Enumerable` module
into your class. As long as you have `each` defined, the `Enumerable`
module gives you `map`, `each_with_index`, `select`, `any?` and all of
the other enumeration methods for free! (Note: you may wish to refactor your `#update`, `#get`, and `#include` methods to use your `#each` method for cleaner code!)
***************************************************************************************************/

class Node {
  constructor(key = null, value = null) {
    this.key = key;
    this.value = value;
    this.next = null;
    this.prev = null
  }

  delete() {
    if (this.prev) { this.prev.next = this.next; }
    if (this.next) { this.next.prev = this.prev; }
    this.key = null;
    this.value = null;
  }
}

class Doubly_Linked_List {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  empty() {
    return this.head === null && this.tail === null;
  }

  // Insert at the head of the list
  unshift(key, val) {
    let node = new Node(key, val);
    if (this.empty()) {
      this.head = this.tail = node;
    } else {
      node.next = this.head;
      this.head = node;
      this.head.next.prev = this.head;
    }

    return this.head;
  }

  // Delete at the head of the list
  shift() {
    if (this.empty()) {
      return null;
    } else {
      let head = this.head;
      this.head = this.head.next;
      head.delete();
      return head.key;
    }
  }

  push(key, val) {
    let node = new Node(key, val);
    if (this.empty()) {
      this.head = this.tail = node;
    } else {
      node.prev = this.tail;
      this.tail = node;
      this.tail.prev.next = this.tail;
    }

    return this.tail;
  }

  pop() {
    if (this.empty()) {
      return null;
    } else {
      let tail = this.tail;
      this.tail = this.tail.prev;
      tail.delete();
      return tail.key;
    }
  }

  update(key, val) {
    let node = this.head;
    while (key !== node.key) {
      node = node.next;
    }
    node.value = val;
  }

  get(key) {
    let node = this.head;
    while (key !== node.key) {
      node = node.next;
    }
    return node.value;
  }

  include(key) {
    let node = this.head;
    while (node.next) {
      node = node.next;
      if (node.key === key) {
        return true;
      }
    }

    return false;
  }

  remove(key) {
    let node = this.head;
    while (node.next) {
      node = node.next;
      if (node.key === key) {
        node.delete();
      }
    }
  }

  moveToFront(node) {

  }

  log() {
    console.log(this);
  }
}

let list = new Doubly_Linked_List();
list.unshift('two', 2);
list.unshift('one', 1);
list.push('three', 3);
list.push('four', 4);
// list.remove('three');
// list.remove('two');
// list.pop();
// list.pop();
// list.shift();
// list.shift();
list.log();
