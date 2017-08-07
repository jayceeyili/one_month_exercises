/****************************************************************************************
  Write a function that takes an array of integers and returns their sum. Use recursion.
*****************************************************************************************/

const sum_rec = arr => {
  if (!arr.length) return 0;
  return arr[0] + sum_rec(arr.slice(1));
};

console.log(sum_rec([1, 2, 3]));
