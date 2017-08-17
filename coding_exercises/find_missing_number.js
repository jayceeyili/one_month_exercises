/***************************************************************************************************
  Assume an array of non-negative integers.
  A second array is formed by shuffling the elements of the first array and deleting a random element.
  Given these two arrays, find which element is missing in the second array.
  Do this in linear time with constant memory use.
***************************************************************************************************/

const find_missing_number = (arr1, arr2) => arr1.reduce((a, b) => a + b) - arr2.reduce((a, b) => a + b);

console.log(find_missing_number([1,2,3], [1,2]));
