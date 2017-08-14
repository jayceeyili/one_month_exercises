/***************************************************************************************************
## Phase 2: Hashing

A hash function is a sequence of mathematical operations that
deterministically maps any arbitrary data into a pre-defined range of
values. Anything that does that is a hash function. However, a *good*
hash function satisfies the property of being **uniform** in how it
distributes that data over its range of values.

To create a good hash function, we want to be able to hash absolutely
anything. That includes integers, strings, arrays, and even other
hashes.

Also, a hash function should be **deterministic**, meaning that it
should always produce the same value given the same input. It's also
essential that equivalent objects produce the same hash. So if
we have two arrays, each equal to [1, 2, 3], we want them both to hash
to the same value.

So let's construct a nice hashing function that'll do that for us. Be
creative here!

Write hash functions for `Array`, `String`, and `Hash`. Build these up sequentially.

  - Use `Fixnum#hash` as a base hashing function. The trick here will be to create a
    scheme to convert instances of each class to a `Fixnum` and then apply this
    hashing function. This can be used on `Numeric`s such as the index of an array
    element.
    - Don't try to overwrite Ruby's native `Fixnum#hash`; making a hash function
      for numbers is something that's outside the scope of this assignment.
  - Ordering of elements is essential to hashing an `Array` or `String`. This means each
    element in an `Array` or `String` should be associated with its index during hashing.
    Ex. `[1, 2, 3].hash == [3, 2, 1].hash # => false`
  - On the other hand, ordering is **not** to be considered with a `Hash`. Hashes are based
    on sets and have no fixed order. Ex. `{a: 1, b: 2}.hash == {b: 2, a: 1}.hash # => true`

### Hints:
  - Can you write `String#hash` in terms of `Array#hash`?
  - When you get to hashing hashes: one trick to make a hash function
    order-agnostic is to turn the object into an array, stably sort
    the array, and then hash the array. This'll make it so every
    unordered version of that same object will hash to the same value.

#### Notes:

* **Don't spend more than 30 minutes working on hashing functions**. Great hashing functions
  are hard to write. Your goal is to write a good-enough hashing function and move forth to the
  fun stuff ahead! Call over a TA if needed.
* **Avoid using byebug inside your hash methods**. The functioning of byebug's internal code will
  cause this to break since it calls Array#hash.
* **You may want to refer to the resource on
[XOR][xor-info]** (`^` in Ruby). XOR is a great tool for hashing because
it's fast, and it provides a good, nearly uniform output of bits.

[More reading on hash functions][hash-info].

[hash-info]: https://en.wikipedia.org/wiki/Hash_function
[xor-info]: http://www.cs.umd.edu/class/sum2003/cmsc311/Notes/BitOp/xor.html

***************************************************************************************************/
