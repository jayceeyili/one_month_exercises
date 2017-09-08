/***************************************************************************************************
  Write a method that takes a hash of symbol keys,
  for which the values are integers representing each key's weight.
  The method returns a key such that the chances of selecting a particular key are weighted by that key's value.
  For the hash {:a => 1, :b => 2, :c => 3}, the chance of returning :c is 1/2, :b is 1/3, and :a is 1/6.
***************************************************************************************************/

const choose_a_record = hash => {
  let totleWeight = Object.values(hash).reduce((a, b) => a + b);
  let sum = 0;
  let rand = Math.random() * totleWeight;

  for (let key in hash) {
    sum += hash[key];
    if (rand < sum) {
      return key;
    }
  }
};

let hash = {
  a: 1,
  b: 2,
  c: 3
};

console.log(choose_a_record(hash));
