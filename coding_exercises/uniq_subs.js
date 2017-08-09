/***************************************************************************************************
  Write a method that finds all the unique substrings for a word.
***************************************************************************************************/

const uniq_subs = str => {
  let subsMap = {};

  for (let i = 0; i < str.length; i++) {
    for (let k = i; k < str.length; k++) {
      let currSub = str.slice(i, k + 1);
      if (!subsMap[currSub]) {
        subsMap[currSub] = true;
      } else {
        subsMap[currSub] = !subsMap[currSub];
      }
    }
  }

  return Object.keys(subsMap);
};

console.log(uniq_subs('abcd'));
