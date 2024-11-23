function getUser(id, callback) {
  setTimeout(() => {
    console.log("Reading a user id from a database: ", id);
    let user = {
      id: id,
      githubUsername: "mosh",
    };

    callback(user);
  });
}

getUser(1, (user) => {
  console.log("User", user);
});
