/***************************************************************************************************
  Implement the 'look and say' function. 'Look and say' takes an input array and outputs
  an array that describes the count of the elements in the input array as they appear in order.
  Example:
  # there is one '1' in the input array
  look_and_say([1]) == [[1, 1]]

  # there are two '1's in the input array
  look_and_say([1, 1]) == [[2, 1]]

  # there is one '2', followed by one '1' in the input array
  look_and_say([2, 1]) == [[1, 2], [1, 1]]

  # is one '1', followed by one '2', followed by 2 '1's in the input
  # array
  look_and_say([1, 2, 1, 1]) == [[1, 1], [1, 2], [2, 1]]
***************************************************************************************************/

const look_and_say = arr => {
  let result = [];

  arr.forEach(ele => {
    let len = result.length;
    if (!len || result[len - 1][1] !== ele) {
      result.push([1, ele]);
    } else {
      result[len - 1][0]++;
    }
  })

  return result;
};

console.log(look_and_say([1, 2, 1, 1]));
