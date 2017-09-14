/*
You are given a number X. You have to obtain the number X starting from 0 by performing the following operations:
Add or subtract 1 to the current number. The cost is A units.
Double the current number. The cost is B units.
Without making the number negative at any time, find the minimum cost of obtaining the number X when starting from 0.
Note: Current number cannot be negative at any moment of time.

*/

const numberCreation = (x, a, b) => {

  const helper = (curr = 0, cost = 0) => {
    if (curr === x) return cost;
    if (curr >= 0) {
      return helper((curr - 1), (cost + a)) + helper((curr + 1), (cost + a)) + helper((curr * 2), (cost + b));
    } else {
      return;
    }
  };

  return helper();
}

let result = numberCreation(4, 1, 1);
console.log(result);
