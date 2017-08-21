/***************************************************************************************************
  Write a function that takes an integer and returns it in binary form.
***************************************************************************************************/

const binary = num => {
  let result = '';

  while (num) {
    result += num % 2;
    num = Math.floor(num / 2);
  }

  return result ? result.split('').reverse().join('') : '0';
};

console.log(binary(0));
