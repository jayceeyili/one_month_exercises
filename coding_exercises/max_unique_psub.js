/***************************************************************************************************
  Given a string, find the lexicographically greatest pseudo-substring.
  Example (read on for further explanation):
  max_unique_psub('abcdef')
  => 'f'

  max_unique_psub('abcdefedcba')
  => 'fedcba'

  max_unique_psub('algorithms')
  => 'ts'
  Let's define a pseudo-substring: psub is any subset that is ordered by index.
  (Differs from a standard substring because it does not need to be contiguous.)
  For example:
  "ac" is a psub of "acb"
  "cb" is a psub of "acb"
  "bc" is _not_ a psub of "acb" (letters are out of order)

  psubs("acb") == [
    "a",
    "ac",
    "acb",
    "ab",
    "c",
    "cb",
    "b"
  ]
  Next, let's define lexicographical order:
  str1 > str2 IF
  (a) str1 != str2 AND EITHER
  (b1) str2 is a prefix of str1 OR
  (b2) at the first position at which str1 and str2 differ (say i), str1[i] > str2[i].
  For instance: "abc" > "ab" and "acb" > "abc".
  With this information, given a string str, find the lexicographical greatest psubstring.
  Solve it first by generating all psubstrings and picking the greatest (in Big-Oh, how many are there?).
  Next, improve your algorithm to do this in O(n) time.
***************************************************************************************************/

const max_unique_psub = str => {
  let conbins = combinations(str);
  let max = null;
  let result = null;

  conbins.forEach(sub => {
    if (checkOrder(sub)) {
      let len = sub.length;
      if (len > max || !max) {
        max = len;
        result = sub;
      }
    }
  })

  return result;
};

const combinations = str => {
  let result = [];

  const find = (prefix, chars) => {
    for (let i = 0; i < chars.length; i++) {
      let curr = prefix + chars[i];
      result.push(curr);
      find(curr , chars.slice(i + 1));
    }
  }

  find('', str);

  return result;
}

const checkOrder = str => {
  for (let i = 1; i < str.length; i++) {
    if (str[i] >= str[i - 1]) {
      return false;
    }
  }

  return true;
};

// console.log(combinations('abc'));
console.log(max_unique_psub('abcdefedcbaz'));
