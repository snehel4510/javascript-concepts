// Functions that can be assigned to a variable, passed into another function, or returned from another function just like any other normal value, are called first class functions. In JavaScript, all functions are first class functions.

//The functions that take a function as an argument, or return a function as a return value are called higher order functions.

//When functions are passed in to or returned from another function, then those functions which were passed in or returned can be called a lambda.

// JavaScript functions are executed in the sequence they are called. Not in the sequence they are defined.

// arrow functions
let add = (a, b) => {
  return a + b;
};
console.log(add(4, 5));

// The arity of a function is the number of arguments it requires. Currying a function means to convert a function of N arity into N functions of arity 1.

function unCurried(x, y) {
  return x + y;
}
function curried(x) {
  return function (y) {
    return x + y;
  };
}
const curried = (x) => (y) => x + y;
curried(1)(2);

// Similarly, partial application can be described as applying a few arguments to a function at a time and returning another function that is applied to more arguments. Here's an example:

function impartial(x, y, z) {
  return x + y + z;
}
const partialFn = impartial.bind(this, 1, 2);
partialFn(10); // 13
