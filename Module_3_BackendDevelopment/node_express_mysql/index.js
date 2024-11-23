const express = require("express");
const app = express();
const connection = require("./connection");
const port = 3000;
app.use(express.json());

// middleware
app.use((req, res, next) => {
  console.log("coming in the middleware");
  next();
});

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.get("/employees/", async (req, res) => {
  try {
    const [data, fields] = await connection
      .promise()
      .query("select * from bootcamp_database.employees");
    return res.json(data);
  } catch (errors) {
    return res.send(errors);
  }
});

// task : create an api to get all the departments
app.get("/departments/", async (req, res) => {
  try {
    const [data, fields] = await connection
      .promise()
      .query("select * from bootcamp_database.departments");
    return res.json(data);
  } catch (errors) {
    return res.send(errors);
  }
});

// get employees by id
app.get("/employees/:id", async (req, res) => {
  try {
    const [data, fields] = await connection
      .promise()
      .query(
        "select * from bootcamp_database.employees where employee_id = ?",
        [req.params.id]
      );
    if (data.length > 0) {
      return res.json(data);
    } else {
      return res.send("Employee not found");
    }
  } catch (errors) {
    return res.send(errors);
  }
});

// delete employee by id
app.delete("/employees/delete/:id", async (req, res) => {
  try {
    const [data, fields] = await connection
      .promise()
      .query("delete from bootcamp_database.employees where employee_id = ?", [
        req.params.id,
      ]);
    if (data.affectedRows > 0) {
      return res.send("Employee deleted");
    } else {
      return res.send("Employee not found");
    }
  } catch (errors) {
    return res.send(errors);
  }
});

// To Do:
// 1. Get departments based on id
// 2. delete department based on id

// post employee
app.post("/employees/add", async (req, res) => {
  try {
    const [data, fields] = await connection
      .promise()
      .query(
        "insert into bootcamp_database.employees (first_name, last_name, status, salary, department_id) values (?, ?, ?, ?, ?)",
        [
          req.body.first_name,
          req.body.last_name,
          req.body.status,
          req.body.salary,
          req.body.department_id,
        ]
      );
    if (data.affectedRows > 0) {
      return res.json("employees created successfully");
    } else {
      return res.json("Employee not added");
    }
  } catch (errors) {
    return res.send(errors);
  }
});

app.post("/departments/add", async (req, res) => {
  try {
    const [data, fields] = await connection
      .promise()
      .query(
        "insert into bootcamp_database.departments (department_name, status ) values (?, ?)",
        [req.body.department_name, req.body.status]
      );
    if (data.affectedRows > 0) {
      return res.json("department created successfully");
    } else {
      return res.json("Department not added");
    }
  } catch (errors) {
    return res.send(errors);
  }
});

// patch -
//app.patch();

// put -
app.put("/employees/update/:id", async (req, res) => {
  const employee_id = req.params.id;
  const { first_name } = req.body;

  try {
    const [data] = await connection.promise().query(
      `update bootcamp_database.employees 
       set first_name = ? 
       where employee_id = ?`,
      [first_name, employee_id]
    );
    res.json(data);
  } catch (errors) {
    res.json(errors);
  }
});

app.listen(port, () => {
  console.log("Server is running on port " + port);
});
