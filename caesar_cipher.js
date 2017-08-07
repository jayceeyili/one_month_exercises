/*********************************************************************************************
  Write a function that takes a message and an increment amount and outputs the same letters
  shifted by that amount in the alphabet. Assume lowercase and no punctuation. Preserve spaces.
**********************************************************************************************/

const caesar_cipher = (str, shift) => {
  let result = '';

  str.split('').forEach(char => {
    if (char === ' ') {
      result += ' ';
    } else {
      result += String.fromCharCode((char.charCodeAt(0) + shift - 97) % 26 + 97);
    }
  })

  return result;
};

console.log(caesar_cipher('abc xyz', 3));
