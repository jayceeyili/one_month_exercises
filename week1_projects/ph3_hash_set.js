/***************************************************************************************************
## Phase 3: HashSet

Now that we've got our hashing functions, we can store more than just
integers. Let's make it so we can store any data type in our set.

This will be a simple improvement on ResizingIntSet. Just hash every
item before performing any operation on it. This will return an integer,
which you can modulo by the number of buckets. Implement the `#[]` method to dry up your code. With this simple
construction, you set will be able to handle keys of any data type.

Easy as pie. We now have a fabulous set that works with any data type!

Now let's take it one step further.

Up until now, our hash set has only been able to insert and then check
for inclusion. We couldn't create a map of values, as in key-value
pairs. Let's change that and create a **hash map**. But first, we'll
have to build a subordinate, underlying data structure.
***************************************************************************************************/
