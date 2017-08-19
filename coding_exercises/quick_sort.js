/***************************************************************************************************
  Implement QuickSort.
***************************************************************************************************/

const quickSort = (arr, left, right) => {
  if (arr.length > 1) {
    left = left || 0;
    right = right || arr.length - 1;

    let index = partition(arr, left, right);

    if (index - 1 > left) {
      quickSort(arr, left, index - 1);
    }
    if (right > index) {
      quickSort(arr, index, right);
    }
  }

  return arr;
};

const partition = (arr, left, right) => {
  let pivot = arr[Math.floor((left + right) / 2)];

  while (left <= right) {
    while (arr[left] < pivot) left++;
    while (arr[right] > pivot) right--;
    if (left <= right) {
      [arr[left], arr[right]] = [arr[right], arr[left]];
      left++;
      right--;
    }
  }

  return left;
};

let arr = [4, -23235, 5, 8, 1, 1324, 0];
console.log(quickSort(arr));
