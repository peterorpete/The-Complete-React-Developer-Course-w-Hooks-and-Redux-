const multiplier = {
 //numbers - array of numbers
 numbers: [33, 11, 2, 5, 15],
 multiplyBy: 3,
 multiply() {
  return this.numbers.map((number) => number * this.multiplyBy);
 },
 //multiplyBy - single number
 //muttiply - return a new array where the number have been multiplied
};

console.log(multiplier.multiply());
