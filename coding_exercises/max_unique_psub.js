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
