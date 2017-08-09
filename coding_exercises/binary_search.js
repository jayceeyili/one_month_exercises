/***************************************************************************************************
  Implement binary search.
***************************************************************************************************/

const binary_search = (sortedArr, target) => {
  const helper = (start, end) => {
    if (start === end || start === end - 1) return null;

    let mid = Math.floor((end - start) / 2) + start;

    if (sortedArr[mid] === target) {
      return mid;
    } else if (target < sortedArr[mid]) {
      return helper(start, mid);
    } else {
      return helper(mid, end);
    }
  };

  return helper(0, sortedArr.length);
};

console.log(binary_search([2, 4, 6, 8, 10, 14], 1));
