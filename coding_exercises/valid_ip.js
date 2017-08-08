/***************************************************************************************************
  Write a method that takes a string as input. It should return true if the input is a valid IPv4
  address (ie. anything between 0.0.0.0 and 255.255.255.255 is valid).
****************************************************************************************************/

const valid_ip = str => {
  if (!str.match(/^\d+(\.\d+){3}$/)) return false;
  let nums = str.split('.').map(e => parseInt(e));
  return nums.every(n => n >=0 && n <= 255);
};

console.log(valid_ip('11.11.1.23'));
