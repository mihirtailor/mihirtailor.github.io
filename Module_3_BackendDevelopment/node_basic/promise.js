// Waht is Asynchronous Programming?
// Asynchronous Programming is a way of writing code that allows multiple tasks to be executed simultaneously.
// In JavaScript, asynchronous programming is achieved through the use of callbacks, promises, and async/await.
// Callbacks are functions that are passed as arguments to other functions and are executed when a certain event occurs.
// Promises are objects that represent the eventual completion or failure of an asynchronous operation and allow you to handle the result of the operation when it becomes available.
// Async/await is a syntax for writing asynchronous code that makes it look and behave more like synchronous code.

// What is Synchronous Programming?
// Synchronous programming is a way of writing code that executes one task at a time, in a sequential order.
// In synchronous programming, each statement in a program is executed one after another, in the order in which they appear in the code.
// Synchronous programming is easier to understand and debug, but it can be slower and less efficient than asynchronous programming.

const promise = new Promise((resolve, rejected) => {
  setTimeout(() => {
    resolve("Money is returned");
    rejected(new Error("I don't have money"));
  }, 1000);
});

promise
  .then((data) => {
    console.log("coming in the then condition");
    console.log(data);
  })
  .catch((error) => {
    console.log("coming in the catch condition");
    console.log(error);
  });
