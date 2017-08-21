/***************************************************************************************************
  Implement factorial with and without recursion.
  What is a potential disadvantage of the recursive way?
  What is tail-recursion? Do Ruby or JavaScript have tail-call optimization? Pretend they do;
  write a tail-recursive version of rec_fac.
***************************************************************************************************/

// const factorial = num => {
//   if (num === 1) return num;
//   return num * factorial(num - 1);
// };

const factorial = num => {
  let result = 1;

  while (num > 1) {
    result *= num;
    num -= 1;
  }

  return result;
};

console.log(factorial(5));
