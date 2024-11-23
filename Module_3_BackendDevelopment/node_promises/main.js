// what is a callback function?
// a cllback function is a function that is passed as an argument to another function

// what is synchronous and asynchronous code?
// synchhronous code is code that is executed in order, one after the other
// synchronous code is blocking, meanning that it will block the execution of the code until it is finished

// Asynchronous code
// Asynchronous code is code that is executed in parallel with other code
// Asynchronous code is non-blocking, meaning that it will not block the execution of the code until it is finished

console.log("Before");

function getUser(id, callback) {
  // Simulate a database call using a setTimeout built in function
  setTimeout(() => {
    console.log("Retreiving user with id: " + id);
    let user = {
      id: id,
      githubUsername: "jdoe",
    };
    // once we have our user from the database call, we can provide that to the callback function
    callback(user);
  }, 3000);
}

// a callback function takes the result of an asynchronous operation and does something with it.
// we call the getUser function to get the use object with id 1 and pass it to the callback function for proecession
getUser(1, (user) => {
  console.log(user);
});

console.log("After");

// get user function that return a promise object.

function getUserPromise(id) {
  // return a new project object
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Retreiving user with id: " + id);
      let user = {
        id: id,
        githubUsername: "jdoe",
      };
      if (user) {
        resolve(user);
      } else {
        reject(new Error("User not found"));
      }
    }, 3000);
  });
}

// .then method is used to handle the resolve value of a promise
// .catch method is used to handle the rejected value of a promise

getUserPromise(1)
  .then((user) => {
    console.log(user);
  })
  .catch((err) => {
    console.log(err);
  });
