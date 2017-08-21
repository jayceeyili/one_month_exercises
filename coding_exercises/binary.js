/***************************************************************************************************
  Write a function that takes an integer and returns it in binary form.
***************************************************************************************************/

// -3 >>> 0 (right logical shift) coerces its arguments to unsigned integers,
// which is why you get the 32-bit two's complement representation of -3.
// const binary = num => (num >>> 0).toString(2);

const binary = num => {
  let result = '';

  while (num) {
    result += num % 2;
    num = Math.floor(num / 2);
  }

  return result ? result.split('').reverse().join('') : '0';
};

console.log(binary(0));
