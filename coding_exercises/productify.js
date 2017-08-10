/***************************************************************************************************
  Given a list of numbers in an array, replace all the numbers with the product of all other numbers.
  Do this in O(n) time without using division.
***************************************************************************************************/

const productify = arr => {
  let result = new Array(arr.length).fill(1);

  let lowerProduct = 1;
  for (let i = 0; i < arr.length; i++) {
    result[i] *= lowerProduct;
    lowerProduct *= arr[i];
  }

  let upperProduct = 1;
  for (let k = arr.length - 1; k >= 0; k--) {
    result[k] *= upperProduct;
    upperProduct *=arr[k];
  }

  return result;
};

console.log(productify([1, 2, 4]));
