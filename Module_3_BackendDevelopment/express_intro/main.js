const express = require("express");
const app = express();
var figlet = require("figlet");

function custom_middleware(req, res, next) {
  console.log("Custom middleware called");
  next();
}

app.use(custom_middleware);

// what is an RESTful API?
// RESTful API is an application programming interface (API) that uses HTTP requests to GET, POST, PUT, DELETE data.
// GET - retrieve data
// POST - create data
// PATCH - update data
// PUT - update data
// DELETE - delete data
const users = [
  { id: 1, name: "John" },
  { id: 2, name: "Jane" },
  { id: 3, name: "Jack" },
];

app.get("/users", function (req, res) {
  // get users from a database
  res.send(users, 200); // Send the users array as a JSON response
});

app.get("/users/:id", (req, res) => {
  // get users from a database
  let id = parseInt(req.params.id);
  let user = users.find((user) => user.id === id);

  if (!user) {
    res.send("User not found", 404);
  }
  res.status(200).send(user);
});

// Post method is use to create data
app.post("/users", (req, res) => {
  let user = req.body;
  users.push(user);
  res.send(user, 201);
});

// Put method is use to overrite the data
app.put("/users/:id", (req, res) => {
  let id = parseInt(req.params.id);
  let user = users.find((user) => user.id === id);

  if (!user) {
    res.send("User not found", 404);
  }
  // overwrite the data
  user.id = id;
  user.name = req.body.name;

  res.send(user, 200);
});

// Delete Method is use to delete the data

app.delete("/users/:id", (req, res) => {
  let id = parseInt(req.params.id);
  let user = users.find((user) => user.id === id);
  if (!user) {
    res.send("User not found", 404);
  }

  // delete the data
  let index = users.indexOf(user);
  users.splice(index, 1);
  res.send(user, 200);
});

app.listen(3001, () => {
  figlet("Hello World!!", function (err, data) {
    if (err) {
      console.log("Something went wrong...");
      console.dir(err);
      return;
    }
    console.log(data);
  });
  console.log("Listening on port 3001");
});
