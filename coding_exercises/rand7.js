/***************************************************************************************************
  Write a method to generate a random integer (0...7),
  given a method that generates a random integer between (0...5).
  The resulting rand7 distribution must be uniform.
***************************************************************************************************/

const gen5 = () => Math.floor(Math.random() * 6);

const gen7 = () => {
  let result = gen5() * gen5() + gen5();
  if (result <= 21) return result % 7;
  return gen7();
};

console.log(gen7());
