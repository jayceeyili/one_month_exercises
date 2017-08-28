/***************************************************************************************************
  Given a square matrix in the form of a 2D array-of-arrays, return an array consisting of the
  values of the array in "spiral order" (top row, then right hand side, then bottom in reverse,
  then up, the back again...).
***************************************************************************************************/

const spiralTraversal = (matrix, result = []) => {
  // base case;
  if (!matrix.length) {
    return result;
  }
  // top row
  if (matrix.length) {
    result = [...result, ...matrix.shift()];
  }

  // right hand slide down
  for (let i = 0; i < matrix.length; i++) {
    result = [...result, ...matrix[i].splice((matrix[i].length - 1), 1)];
  }

  // bottom in reverse
  if (matrix.length) {
    result = [...result, ...matrix.pop().reverse()];
  }

  // left hand side up
  for (let k = matrix.length - 1; k >= 0; k--) {
    result = [...result, ...matrix[k].splice(0, 1)];
  }

  return spiralTraversal(matrix, result);
};

let matrix = [
  [1,2,3],
  [4,5,6],
  [7,8,9]
];

console.log(spiralTraversal(matrix));
