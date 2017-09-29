/***************************************************************************************************
  Define a function which takes an array and a start index as input, return true or false depends on
  if the pointer can reach a '0'.
  EX: canWin([0, 1, 2, 3, 4], 3) => true; because the start index is 3, which the value is 3; so it
  can move left or right for 3 posion; for left, it reaches 0, so return true;
  canWin([0, 2, 3, 5, 23], 2) => false; 2 => 3 => false;
***************************************************************************************************/

const canWin = (arr, start, visited = {}) => {
  let currVal = arr[start];
  if (visited[start]) return false;

  visited[start] = true;

  if (arr[start] === 0) return true;

  if (start < 0) return canWin(arr, start + currVal, visited);
  if (start > arr.length - 1) return canWin(arr, start - currVal, visited);

  return canWin(arr, start - currVal, visited) || canWin(arr, start + currVal, visited);
};

const case1 = [0, 2, 22, 3, 5, 3];

console.log(canWin(case1, 2));
