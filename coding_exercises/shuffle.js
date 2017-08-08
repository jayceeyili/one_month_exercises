/***************************************************************************************************
  You are given an array and a random number generator. Shuffle the array.
***************************************************************************************************/

const random_number_generator = limit => Math.floor(Math.random() * limit);

const shuffle = arr => {
  // let result = arr.slice();
  let length = arr.length;

  for (let i = 0; i < length; i++) {
    let index = random_number_generator(length - i);
    [arr[i], arr[index]] = [arr[index], arr[i]];
  }

  return arr;
};

console.log(shuffle([1, 3, 54, 6, 2]));
