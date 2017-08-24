/***************************************************************************************************
  Write a method to generate a random integer (0...7),
  given a method that generates a random integer between (0...5).
  The resulting rand7 distribution must be uniform.
***************************************************************************************************/

const gen5 = () => Math.floor(Math.random() * 6);

console.log(gen5());
