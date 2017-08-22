/***************************************************************************************************
  Write a method that takes an array and returns all its permutations.
  Time/memory complexity should be proportional to the number of permutations; what is this?
  Example:
  permutations([1,2,3])
  => [[1, 2, 3], [2, 1, 3], [2, 3, 1], [1, 3, 2], [3, 1, 2], [3, 2, 1]]
  Bonus:
  Write a class, PermutationIterator, that will iterate through permutations of an array.
  It should use O(n) memory, and return the "next" permutation in O(1) time.
  It can iterate through permutations in whatever order you desire.
***************************************************************************************************/

// Heap's Permutation Algorithm
const swap = (arr, idx1, idx2) => [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];

const permutations = arr => {
  let result = [];

  const permutate = (counter = arr.length)=> {
    if (counter === 1) {
      result.push(arr.slice());
    } else {
      for (let i = 1; i <= counter; i++) {
        permutate(counter - 1);
        let j = counter % 2 ? 1 : i;
        swap(arr, j - 1, counter - 1);
      }
    }
  };

  permutate();

  return result;
};


console.log(permutations([1, 2, 3]));
