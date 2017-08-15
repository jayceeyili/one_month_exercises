/***************************************************************************************************
Given an array, move all zeros to the end. The order of non-zero elements does not matter.
Ex: move_zeros([1, 2, 0, 3, 4, 0, 5, 6, 0]) == [1, 2, 6, 3, 4, 5, 0, 0, 0]
Algorithm should be O(n); use O(1) extra space.
***************************************************************************************************/

const move_zeros = arr => {
  let indexOfZero = arr.length - 1;
  let indexOfNum = 0;
  while (indexOfNum <= indexOfZero) {
    if (arr[indexOfNum] !== 0) {
      indexOfNum++;
      continue;
    }
    [arr[indexOfNum], arr[indexOfZero]] = [arr[indexOfZero], arr[indexOfNum]];
    indexOfZero--;
  }
  return arr;
};

console.log(move_zeros([1, 6, 0, 3, 4, 0, 5, 2, 0, 9]));
