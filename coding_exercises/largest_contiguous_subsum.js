/***************************************************************************************************
  Given an array of integers (positive and negative) find the largest contiguous subsum (sum of a subarray).
  You can solve this trivially in O(n**2) time by considering all subarrays.
  Try to solve it in O(n) time with O(1) memory.
***************************************************************************************************/

const largest_contiguous_subsum = arr => {
  let largestSum = null;
  let currSum = 0;

  arr.forEach(n => {
    currSum += n;
    if (currSum < 0) {
      currSum = 0;
    } else if (currSum > largestSum || !largestSum) {
      largestSum = currSum;
    }
  })

  return largestSum;
};

console.log(largest_contiguous_subsum([-3, 0, 2 , -1, 3]));
