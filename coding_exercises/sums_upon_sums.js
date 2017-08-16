/***************************************************************************************************
  I give you a scrambled list of n unique integers between 0 and n. Tell me what number is missing.
  If I let you use O(nlog(n)) time, what is a naive way of doing this?
  Next, what if I require that you solve the problem in O(n) time? What datastructure might you use?
  Finally, how could you solve the problem in O(n), and also O(1) space?
***************************************************************************************************/

// O(nlog(n))
const sums_upon_sums1 = (arr, n) => {
  arr = arr.sort();
  for (let i = 0; i <= n; i++) {
    if (i !== arr[i]) return i;
  }

  return null;
};

// O(n);
const sums_upon_sums2 = (arr, n) => {
  let helperArr = new Array(n).fill(false);
  for (let i = 0; i < arr.length; i++) {
    helperArr[arr[i]] = !helperArr[arr[i]];
  }

  for (let k = 0; k <= n; k++) {
    if (!helperArr[k]) {
      return k;
    }
  }

  return null;
};

// O(n) in time, O(1) in space; Gauss Sum!
const sums_upon_sums3 = (arr, n) => (1 + n) * n / 2 - arr.reduce((a, b) => a + b);
