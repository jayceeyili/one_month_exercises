/***************************************************************************************************
  ### MaxIntSet

  We'll start with the first stage. In this version of a set, we can only
  store integers that live in a predefined range. So I tell you the
  maximum integer I'll ever want to store, and you give me a set that can
  store it and any smaller positive number.

  - Initialize your MaxIntSet with an integer called `max` to define the
    range of integers that we're keeping track of.
    - Internal structure:
    - An array called `@store`, of length `max`
    - Each index in the `@store` will correspond to an item, and the value
      at that index will correspond to its presence (either `true` or `false`)
      - e.g., the set `{ 0, 2, 3 }` will be stored as: `[true, false, true, true]`
      - The size of the array will remain constant!
      - The `MaxIntSet` should raise an error if someone tries to insert, remove, or check
        inclusion of a number that is out of bounds.
      - Methods:
      - `#insert`
      - `#remove`
      - `#include?`
      Once you've built this and it works, we'll move on to the next
    iteration.

    ### IntSet

    Now let's see if we can keep track of an arbitrary range of integers.
    Here's where it gets interesting. Create a brand new class for this one.
    We'll still initialize an array of a fixed length--say, 20. But now,
    instead of each element being `true` or `false`, they'll each be
    sub-arrays.

    Imagine the set as consisting of 20 buckets (the sub-arrays). When we
    insert an integer into this set, we'll pick one of the 20 buckets where
    that integer will live. That can be done easily with the modulo
    operator: `i = n % 20`.

    Using this mapping, which wraps around once every 20 integers, every
    integer will be deterministically assigned to a bucket. Using this
    concept, create your new and improved set.

    - Initialize an array of size 20, with each containing item being an empty array.
    - To look up a number in the set, modulo (%) the number by the set's
      length, and add it to the array at that index. If the integer is
      present in that bucket, that's how we know it's included in the set.
    - You should fill out the `#[]` method to easily look up a bucket in the store - calling
      `self[num]` will be more DRY than `@store[num % num_buckets]` at every step of the way!
    - Your new set should be able to keep track of an arbitrary range of
      integers, including negative integers. Test it out.

    ### ResizingIntSet

    The IntSet is okay for small sample sizes. But if the number of elements
    grows pretty big, our set's retrieval time depends more and more on an
    array scan, which is what we're trying to get away from. It's slow.

    Scanning for an item in an array (when you don't know the index) takes
    `O(n)` time, because you potentially have to look at every item. So if we're
    having to do an array scan on one of the 20 buckets, that bucket will have on
    average 1/20th of the overall items. That gives us an overall time
    complexity proportional to `0.05n`. When you strip out the 0.05 constant
    factor, that's still `O(n)`. Meh.

    Let's see if we can do better.

    - Make a new class. This time, let's increase the number of buckets as
      the size of the set increases. The goal is to have `buckets.length >
      N` at all times.
    - You may want to implement an `inspect` method to make debugging easier.
    - What are the time complexities of the operations of your set
      implementation?
***************************************************************************************************/
class MaxIntSet {
  constructor(max) {
    this._max = max;
    this._storge = new Array(max).fill(false);
  }

  insert(num) {
    this._validate(num);
    this._storge[num] = true;
  }

  remove(num) {
    this._validate(num);
    if (this._storge[num]) {
      this._storge[num] = false;
    } else {
      throw Error(`${num} does not exist`);
    }
  }

  include(num) {
    this._validate(num);
    return this._storge[num];
  }

  _isValid(num) {
    return num < this._max;
  }

  _validate(num) {
    if (!this._isValid(num)) {
      throw Error(`${num} out of range`);
    }
  }
}

class IntSet {
  constructor(numBuckets = 20) {
    this._storge = new Array(numBuckets).fill([]).map(ele => ele = []);
  }

  insert(num) {
    if (!this.include(num)) {
      return this._bucket(num).push(num);
    }
  }

  remove(num) {
    if (this.include(num)) {
      this._bucket(num).splice(this._bucket(num).indexOf(num), 1);
    }
  }

  include(num) {
    return this._bucket(num).indexOf(num) !== -1 ? true : false;
  }

  _bucket(num) {
    return this._storge[num % this.numBuckets()];
  }

  numBuckets() {
    return this._storge.length;
  }
}

class ResizingIntSet {
  constructor(numBuckets = 20) {
    this._storge = new Array(numBuckets).fill([]).map(ele => ele = []);
    this._count = 0;
  }

  insert(num) {
    if (!this.include(num)) {
      this._bucket(num).push(num);
      this._count++;
    }

    if (this._count >= this.numBuckets()) {
      this.resize();
    }
  }

  remove(num) {
    if (this.include(num)) {
      this._bucket(num).splice(this._bucket(num).indexOf(num), 1);
    }
  }

  include(num) {
    return this._bucket(num).indexOf(num) !== -1 ? true : false;
  }

  _bucket(num) {
    return this._storge[num % this.numBuckets()];
  }

  numBuckets() {
    return this._storge.length;
  }

  resize() {
    let oldStorge = this._storge;
    this._count = 0;
    this._storge = new Array(oldStorge.length * 2).fill([]).map(ele => ele = []);
    oldStorge.forEach(bucket => {
      bucket.forEach(ele => this.insert(ele));
    })
  }
}
