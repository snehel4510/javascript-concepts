//JavaScript functions are executed in the sequence they are called. Not in the sequence they are defined.

// A callback is a function passed as an argument to another function. This technique allows a function.to call another function. A callback function can run after another function has finished

// 1st case:
function myDisplayer1(some) {
  console.log(some);
}
function myCalculator1(num1, num2) {
  let sum = num1 + num2;
  return sum;
}
let result = myCalculator1(5, 5);
myDisplayer1(result);

// The problem with the first example above, is that you have to call two functions to display the result.

// 2nd case:
function myDisplayer2(some) {
  console.log(some);
}
function myCalculator2(num1, num2) {
  let sum = num1 + num2;
  myDisplayer2(sum);
}
myCalculator2(5, 5);

// The problem with the second example, is that you cannot prevent the calculator function from displaying the result.

// Now it is time to bring in a callback.
function myDisplayer(some) {
  console.log(some);
}
function myCalculator(num1, num2, myCallback) {
  let sum = num1 + num2;
  myCallback(sum);
}
myCalculator(5, 5, myDisplayer);

// the above example isn't good enough, callbacks functions are mostly used where you need to run a function after another function has finished. or in asynchronous programming.
setTimeout(function () {
  myFunction("I am a callback !!!");
}, 3000); // function will be called after 3 seconds
function myFunction(value) {
  console.log(value);
}

setInterval(func, 2000); // func will be called at an interval of every 2 seconds
function func() {
  let d = new Date();
  console.log(d.getHours() + ":" + d.getMinutes() + ":" + d.getSeconds());
}

// If you create a function to load an external resource (like a script or a file), you cannot use the content before it is fully loaded.
//This is the perfect time to use a callback.
