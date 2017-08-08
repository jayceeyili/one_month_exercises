/****************************************************************************************************
  Write a function, fibs(num) which returns the first n elements from the fibonnacci sequence, given n.
  Solve it both iteratively and recursively.
*****************************************************************************************************/
// iterative solution
const fibs = n => {
  let result = [1, 1];
  if (n < 3) return result;

  let i = 1;
  while (result.length < n) {
    let sum = result[i - 1] + result[i];
    i++;
    result.push(sum);
  }

  return result;
};

// recursive solution
// const fibs = (n, arr = [1, 1]) => {
//   if (arr.length >= n) return arr;
//   let length = arr.length - 1;
//
//   let sum = arr[length] + arr[length - 1];
//   arr.push(sum);
//   return fibs(n, arr);
// }

console.log(fibs(3));
