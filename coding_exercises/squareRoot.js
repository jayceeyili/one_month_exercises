/***************************************************************************************************
  Implement a square root function that uses only addition, subtraction, multiplication and division
  in less than linear time. You may assume that input is always a perfect square.
  Hint: One naive solution has a better time complexity than many people realize--iterating
  from 0 until the square root is going to be O(sqrt n), not O(n). However, we can do better!
***************************************************************************************************/

// naive solution
// const squareRoot = num => {
//   for (let i = 1; i <= num / 2; i++) {
//     if (i * i === num) return i;
//   }
// };

// use binary search
const squareRoot = num => {
  let tempArr = [];
  for (let i = 1; i <= num / 2; i++) tempArr.push(i);

  const search = (low, high) => {
    if (low === high || low === high - 1) return null;

    let mid = Math.floor((high - low) / 2) + low;

    if (tempArr[mid] * tempArr[mid] === num) {
      return mid;
    } else if (num < tempArr[mid] * tempArr[mid]) {
      return search(low, mid);
    } else {
      return search(mid, high);
    }
  };

  let idx = search(0, tempArr.length - 1);

  return tempArr[idx];
};

console.log(squareRoot(121));
