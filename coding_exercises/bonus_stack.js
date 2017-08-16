/***************************************************************************************************
  Implement a stack with a method max that returns the maximum value of the stack.
  max should run in O(1) time, no matter what operations are performed on the stack.
***************************************************************************************************/

class Stack {
  constructor() {
    this.storage = [];
    this.max = null;
  }

  push(val) {
    if (!this.storage.length) {
      this.storage.push(val);
      this.max = val;
    } else {
      this.storage.push(val);
      this.max = val > this.max ? val : this.max;
    }
  }

  pop() {
    let value = this.storage.pop();
    this.max = value === this.max ? Math.max(...this.storage) : this.max;
    return value;
  }

  maximum() {
    return this.max;
  }
}

let stack = new Stack();
stack.push(2);
stack.push(1);
stack.push(3);
stack.pop();
console.log(stack.maximum());
