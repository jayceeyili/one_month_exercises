/***************************************************************************************************
  Write a method that reads in a file of integers, one per line, and sums them.
  Skip the line if it begins with a "#".
***************************************************************************************************/
let fs = require('fs');

const sum_from_file = fileName => {
  let content = fs.readFileSync(fileName, 'utf8');
  let result = content.split('\n').filter(ele => ele && ele[0] !== '#');

  return result.map(ele => parseInt(ele)).reduce((a, b) => a + b);
};

console.log(sum_from_file('/Users/yili/Desktop/10x_Club_Exercises/coding_exercises/test.txt'));
