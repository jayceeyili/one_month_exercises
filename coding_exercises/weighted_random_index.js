/***************************************************************************************************
  Given an array, write a function that will return a random index of the array.
  The probability of an index being returned is weighted by the value at that index against the
  sum of the array values. For example, for the array [4, 6, 8], index 0 should be returned with
  4 in 18 odds, index 1 should be returned with 6 in 18 odds, and index 2 should be return with
  8 in 18 odds. Implement this in O(n) time.+
***************************************************************************************************/

const weighted_random_index = arr => {
  let sum = arr.reduce((a, b) => a + b);
  let helperArr = [];
  arr.forEach((ele, i) => {
    helperArr = [...helperArr, ...new Array(ele).fill(i)];
  })
  let index = parseInt(Math.random() * sum);
  return helperArr[index];
};

console.log(weighted_random_index([4, 6, 8]));
