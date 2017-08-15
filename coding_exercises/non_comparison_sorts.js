/***************************************************************************************************
  Part 1: Say that I gave you an array of length n, containing the numbers 1..n in jumbled order.
  "Sort" this array in O(n) time. You should be able to do this without looking at the input.
  Part 2: Say that I give you an array of length n with numbers in the range 1..N (N >= n).
  Sort this array in O(n + N) time. You may use O(N) memory.
  Part 3: Say I give you an array of n strings, each of length k. I claim that, using merge sort,
  you can sort this in O(knlog(n)), since comparing a pair of strings takes O(k) time.
  I want you to beat that. Sort the strings in O(kn). Hint: do not compare any two strings.
  You may assume all strings contain only lowercase letters a..z without whitespace or punctuation.
***************************************************************************************************/

const non_comparison_sort1 = (arr, n) => {
  let result = [];
  for (let i = 1; i <= n; i++) {
    result.push(i);
  }
  return result;
};

const non_comparison_sort2 = (arr, N) => {
  let counts = new Array(N + 1).fill(false);
  arr.forEach(ele => counts[ele] = !counts[ele]);

  let result = [];
  for (let k = 0; k < N + 1; k++) {
    if (counts[k]) {
      result.push(k);
    }
  }
  return result;
};

const non_comparison_sort3 = (str, K) => {
  
};
