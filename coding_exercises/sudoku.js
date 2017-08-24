/***************************************************************************************************
  How would you write a program to solve Sudoku? (high level description)
***************************************************************************************************/

// The main idea is called "backtracking".
const solve = board => {
  // base case: if all cell are filled, return true;
  if (allFilled(board)) {
    return true;
  } else {
    next_cell = getNextEmptyCell(board);

    allPossiableValidNumber.forEach(num => {
      toggle(board, next_cell, num);
      if (solve(board)) return true;
      toggle(board, next_cell, num);
    })
  }

  return false;
};
