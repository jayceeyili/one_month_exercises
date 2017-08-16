/***************************************************************************************************
  Implement a queue using stacks. That is, write enqueue and dequeue using only push and pop operations.
  In terms of performance, enqueue should be O(1), but dequeue may be worst-case O(n).
  In terms of ammortized time, dequeue should be O(1). Prove that your solution accomplishes this.
***************************************************************************************************/

class StackQueue {
  constructor() {
    this.leftStack = [];
    this.rightStack = [];
  }

  enqueue(val) {
    this.leftStack.push(val);
  }

  dequeue() {
    this.prepare();
    return this.rightStack.pop();
  }

  prepare() {
    if (!this.rightStack.length) {
      while (this.leftStack.length) {
        let value = this.leftStack.pop();
        this.rightStack.push(value);
      }
    }
  }

  size() {
    return this.leftStack.length + this.rightStack.length;
  }
}
