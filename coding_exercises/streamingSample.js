/***************************************************************************************************
  You know how to use rand to randomly sample an element from an array.
  Now, write a function that, given an input stream of objects, will sample a value. The stream has limited length.
  Use only O(1) memory.
  Every value in the stream should have an equal probability of being sampled.
***************************************************************************************************/

const streamSample = stream => {
  /*
    Consider a sequence of three elements. The first one is picked with a probability of 1.
    However, it might be replaced (notice that we don't return immediately!) by the second
    element with a probability of 1/2. The second element might in turn be replaced by
    the third element, with a probability of 1/3.
    So we get P(first) = P(first picked) * P(second not picked) * P(third not picked) = 1 * 1/2 * 2/3 = 1/3;
    P(second) = P(second picked) * P(third not picked) = 1/2 * 1/3 = 1/3;
    P(third) = P(third picked) = 1/3.
  */
  let result;
  let count = 0;
  let rand = Math.random();

  for (let key in stream) {
    if (rand < 1 / ++count) {
      result = key;
    }
  }
  return stream[key];
};
