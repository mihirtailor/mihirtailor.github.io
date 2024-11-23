console.log("Before");

function getUser(id, callback) {
  setTimeout(() => {
    console.log("Reading a user id from a database: ", id);
    let user = {
      id: id,
      githubUsername: "mosh",
    };

    callback(user);
  }, 3000);
}

getUser(1, (user) => {
  console.log("User", user);
});

console.log("After");

// what is a Promise?
// A promise is an object that holds the eventual result of an asynchronous operation.
// A promise can be in one of three states: pending, fulfilled, or rejected.
// A promise is settled if it is either fulfilled or rejected, but not pending.

function getUserPromise(id) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Reading a user id from a database: ", id);
      let user = {
        id: id,
        githubUsername: "mosh",
      };

      if (user) {
        // if the user is found, resolve the promise with the user object
        resolve(user);
      } else {
        reject(new Error("User not found"));
      }
    }, 3000);
  });
}
