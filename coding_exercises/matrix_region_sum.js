/***************************************************************************************************
  Given a matrix of integers and coordinates of a rectangular region within the matrix,
  find the sum of numbers falling inside the rectangle.
***************************************************************************************************/

const matrix_region_sum = (matrix, topLeftIndex, bottomRightIndex) => {
  let sum = 0;

  for (let i = topLeftIndex[0]; i <= bottomRightIndex[0]; i++) {
    for (let k = topLeftIndex[1]; k <= bottomRightIndex[1]; k++) {
      sum += matrix[i][k];
    }
  }

  return sum;
};
