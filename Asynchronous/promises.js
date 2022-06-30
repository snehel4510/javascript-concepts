const readline = require("readline-sync");

// PROMISES -> A promise is an object that may produce a single value some time in the future.
// A promise may be in one of three states:-
// 1)Pending: The initial state of a promise. The promise has not yet been resolved.
// 2)Fulfilled: The promise has been resolved successfully.
// 3)Rejected: The promise has been resolved unsuccessfully.
// Promises are created in two ways: 1)Using the new keyword & 2)Using the Promise constructor
const myPromise1 = new Promise((resolve, reject) => {});
//It takes a function, as its argument, with two parameters - resolve and reject. These are methods used to determine the outcome of the promise.
const myPromise2 = new Promise((resolve, reject) => {
  let condition;
  if (condition) {
    resolve("Promise was fulfilled");
  } else {
    reject("Promise was rejected");
  }
});

//Promises are most useful when you have a process that takes an unknown amount of time in your code (i.e. something asynchronous), often a server request. When you make a server request it takes some amount of time, and after it completes you usually want to do something with the response from the server. This can be achieved by using the then method. The then method is executed immediately after your promise is fulfilled with resolve
const makeServerRequest = new Promise((resolve, reject) => {
  // responseFromServer is set to true to represent a successful response from a server
  let responseFromServer;
  if (responseFromServer) {
    resolve("We got the data");
  } else {
    reject("Data not received");
  }
});
makeServerRequest.then((result) => {
  console.log(result);
}); // "We got the data"

//The catch method is used to handle errors. It is executed ismmediately after the promise is rejected with reject.
makeServerRequest.catch((error) => {
  console.log(error);
}); // "Data not received"

const server = (a) => {
  return new Promise((resolve, reject) => {
    if (a) resolve("Server is up");
    else reject("Server is down");
  });
};

let a = Number(readline.question("Enter true or false : "));
server(a)
  .then((data) => {
    console.log(data);
  })
  .catch((err) => {
    console.log(err);
  });
