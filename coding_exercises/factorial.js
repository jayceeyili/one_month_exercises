/***************************************************************************************************
  Implement factorial with and without recursion.
  What is a potential disadvantage of the recursive way?
  What is tail-recursion? Do Ruby or JavaScript have tail-call optimization? Pretend they do;
  write a tail-recursive version of rec_fac.
***************************************************************************************************/

// traditional recursion
// const factorial = num => {
//   if (num === 1) return num;
//   return num * factorial(num - 1);
// };

// iteration
// const factorial = num => {
//   let result = 1;
//
//   while (num > 1) {
//     result *= num;
//     num -= 1;
//   }
//
//   return result;
// };

// tail-recursion
const factorial = (num, product) => {
  product = product || 1;
  product *= num;
  if (num < 2) return product;
  return factorial(num -1, product);
};

console.log(factorial(5));
