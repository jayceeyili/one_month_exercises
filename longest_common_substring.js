/****************************************************************************************
  Write a function, longest_common_substring(str1, str2) that takes two strings and returns
  the longest common substring. A substring is defined as any consecutive slice of letters
  from another string.
  Bonus: solve it in O(m * n) using O(m * n) extra space.
  (Hint: the solution involves dynamic programming which will be introduced later in the course.)
*****************************************************************************************/

const longest_common_substring = (str1, str2) => {

  for (let i = 0; i < str1.length; i++) {
    for (let k = str1.length; k > i; k--) {
      let subStr = str1.slice(i, k);
      if (str2.includes(subStr)) {
        return subStr;
      }
    }
  }

  return null;
};

console.log(longest_common_substring('abcdefg', 'a'));
