const express = require("express");
const app = express();
const cors = require("cors");
const port = 3000;

app.use(express.json());
app.use(cors());

const customers = [
  {
    id: 1,
    name: "John",
    email: "john@example.com",
    age: 25,
  },
  {
    id: 2,
    name: "Jane",
    email: "jane@example.com",
    age: 30,
  },
  {
    id: 3,
    name: "Bob",
    email: "bob@example.com",
    age: 35,
  },
];

app.get("/customers", (req, res) => {
  if (!customers) res.status(404).send("No customers found");
  res.send(customers);
  return res.send(customers);
});

app.get("/customers/:id", (req, res) => {
  var customer = customers.find((c) => c.id === parseInt(req.params.id));
  if (!customer) res.status(404).send("Customer not found");
  return res.send(customer);
});

app.post("/customers", (req, res) => {
  if (!req.body || !req.body.name) {
    return res.status(400).send("Please provide the name");
  }

  var customer = {
    id: customers.length + 1,
    name: req.body.name,
    email: req.body.email || "",
    age: req.body.age || null,
  };

  customers.push(customer);
  return res.status(201).send(customer);
});

// give a url to your delete request
// provide id in the url in a way that you send vallue 1. It will be assigned as id = 1
// add the logic to find the customer based on id
// write res.send(customer) to return the customer

// if the customer is not found, return 404 status code
app.delete("/customers/:id", (req, res) => {
  var customer = customers.find((c) => c.id === parseInt(req.params.id));
  if (!customer) res.status(404).send("Customer not found");
  customers.splice(customers.indexOf(customer), 1);
  return res.send(customers);
});

// write the url for your update request
// send the id in the request params of the customer that you want to update
// add the logic to find the customer based on that body
app.put("/customers/:id", (req, res) => {
  var customer = customers.find((c) => c.id === parseInt(req.params.id));
  if (!customer) res.status(404).send("Customer not found");
  customer.name = req.body.name;
  customer.email = req.body.email;
  customer.age = req.body.age;
  return res.send(customers);
});

app.patch("/customers/:id", (req, res) => {
  const customer = customers.find((c) => c.id === parseInt(req.params.id));
  if (!customer) return res.status(404).send("Customer not found");

  // Update only the fields that are present in the request body
  if (req.body.name) customer.name = req.body.name;
  if (req.body.email) customer.email = req.body.email;
  if (req.body.age) customer.age = req.body.age;

  return res.send(customer);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

// explain about
// get, post, put, delete
// explain why we need postman
// explain about different status code
