/***************************************************************************************************
  Given three strings, return whether the third is an interleaving of the first two.
  Interleaving means it only contains characters from the other two, no more no less,
  and preserves their character ordering. "abdecf" is an interleaving of "abc" and "def".
  Note that the first two strings needn't be in alphabetical order like these.
  You may assume that the first two strings do not contain any characters in common.
  Next, relax the assumption that the first two strings contain no overlap.
  Analyze the time-complexity of your solution. You may wish to view this problem recursively.
  Example:
  interleaving?('XXZ', 'XXY', 'XXYXXZ')
  => true
  Note: make sure you can answer why this won't work with your initial implementation.
***************************************************************************************************/

// initial assumption: no dup
const is_shuffle1 = (str1, str2, target) => {
  let idx1 = 0;
  let idx2 = 0;
  target.split('').forEach(char => {
    if (char === str1[idx1]) {
      idx1++;
    } else if (char === str2[idx2]) {
      idx2++;
    }
  })
  return idx1 === str1.length && idx2 === str2.length;
};

// with repeats:
const is_shuffle = (str1, str2, target) => {
  
};
