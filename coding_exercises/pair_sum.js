/***************************************************************************************************
  Given an array of integers, return all pairs that sum up to a specified value k.
  List the pairs in [min, max] order.
***************************************************************************************************/

const pair_sum = (arr, sum) => {
  let result = [];
  let sumMap = {};

  arr.forEach(num => {
    let target = sum - num;
    if (sumMap[target]) {
      if (num < target) {
        result.push([num, target]);
      } else {
        result.push([target, num]);
      }
    }

    sumMap[num] = num;
  })

  return result;
};

console.log(pair_sum([3, 5, 2, -4, 8, 11], 7));
