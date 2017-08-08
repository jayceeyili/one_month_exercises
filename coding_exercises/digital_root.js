/****************************************************************************************
   Write a method, digital_root(num). It should sum the digits of a positive integer.
   If it is greater than or equal to 10, sum the digits of the resulting number.
   Keep repeating until there is only one digit in the result, called the "digital root".
   Do not use string conversion within your method.
*****************************************************************************************/

const digital_root = number => {
  while (number > 10) {
    number = adding_digit(number);
  }

  return number;
};

const adding_digit = digit => {
  // loop
  let sum = 0;

  while (digit > 0) {
    sum += parseInt(digit % 10);
    digit = parseInt(digit / 10);
  }
  return sum;

  // recursion
  // if (digit < 10) return digit;
  // return parseInt(digit % 10) + adding_digit(parseInt(digit / 10));
};

console.log(digital_root(999999));
