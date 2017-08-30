/***************************************************************************************************
  Write a method that takes an array and returns its duplicate values. Use less than O(n*n) time.
***************************************************************************************************/

const duplicates = arr => {
  let countMap = arr.reduce((a, b) => {a[b]++ ? 0 : a[b] = 1; return a}, {});
  let result = [];

  for (let key in countMap) {
    if (countMap[key] > 1) result.push(key);
  }

  return result;
};

let a = [1, 2, 4, 4, 5, 6, 7, 5];
console.log(duplicates(a));
