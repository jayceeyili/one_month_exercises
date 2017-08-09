/***************************************************************************************************
  Write a function that takes a year (four digit integer) and returns an array with the 10 closest
  subsequent years that meet the following condition: the first two digits summed with the last two
  digits are equal to the middle two digits. E.g.,
  1978 => 19 + 78 = 97
  2307 => 23 + 07 = 30
***************************************************************************************************/

const silly_years = year => {
  let result = [];


  while (result.length < 10) {
    if (isSilly(year)) result.push(year);
    year++;
  }

  return result;
};

const isSilly = year => {
  let yearStr = year.toString();
  let firstTwo = yearStr.slice(0,2);
  let middleTwo = yearStr.slice(1, 3);
  let lastTwo = yearStr.slice(2);
  return parseInt(firstTwo) + parseInt(lastTwo) === parseInt(middleTwo);
};

console.log(silly_years(1900));
