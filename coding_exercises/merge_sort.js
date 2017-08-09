/***************************************************************************************************
  Implement merge sort.
***************************************************************************************************/

const merge_sort = arr => {
  if (arr.length < 2) return arr;

  let mid = Math.floor(arr.length / 2);
  let left = arr.slice(0, mid);
  let right = arr.slice(mid);

  return merge(merge_sort(left), merge_sort(right));
};

const merge = (left, right) => {
  let indexLeft = 0;
  let indexRight = 0;
  let merged = [];

  while (indexLeft < left.length && indexRight < right.length) {
    if (left[indexLeft] < right[indexRight]) {
      merged.push(left[indexLeft]);
      indexLeft++;
    } else {
      merged.push(right[indexRight]);
      indexRight++;
    }
  }

  return [...merged, ...left.slice(indexLeft), ...right.slice(indexRight)];
};

console.log(merge_sort([2, 41, 11, 454, 1]));
