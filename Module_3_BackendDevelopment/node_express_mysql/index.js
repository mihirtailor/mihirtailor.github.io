const express = require("express");
const cors = require("cors");
const app = express();
const connection = require("./connection");
const port = 3006;
const corsOptions = {
  origin: ["http://localhost:4200"],
  methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
  allowedHeaders: ["Content-Type", "Authorization"],
  credentials: true,
  optionsSuccessStatus: 200,
};

app.use(cors(corsOptions));
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
      .query("select * from bootcamp_database.employees where ID = ?", [
        req.params.id,
      ]);
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
app.delete("/employees/:id", async (req, res) => {
  try {
    const [result] = await connection
      .promise()
      .query("DELETE FROM bootcamp_database.employees WHERE ID = ?", [
        req.params.id,
      ]);

    return res.status(200).json({
      success: true,
      data: result,
      message:
        result.affectedRows > 0
          ? "Employee deleted successfully"
          : "Employee not found",
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      error: error.message,
    });
  }
});

// To Do:
// 1. Get departments based on id
// 2. delete department based on id

// post employee
app.post("/employees", async (req, res) => {
  try {
    if (
      !req.body.Name ||
      !req.body.Age ||
      !req.body.Email ||
      !req.body.Salary
    ) {
      return res.status(400).json({ message: "All fields are required" });
    }

    const [data, fields] = await connection
      .promise()
      .query(
        "insert into bootcamp_database.employees (Name, Age, Email, Salary) values (?, ?, ?, ?)",
        [req.body.Name, req.body.Age, req.body.Email, req.body.Salary]
      );

    if (data.affectedRows > 0) {
      return res.json("Employee created successfully");
    } else {
      return res.json("Employee not added");
    }
  } catch (errors) {
    return res.status(400).send(errors);
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
app.put("/employees/:id", async (req, res) => {
  const employee_id = req.params.id;
  const { Name, Age, Email, Salary } = req.body;

  try {
    const [data] = await connection.promise().query(
      `UPDATE bootcamp_database.employees
       SET Name = ?, Age = ?, Email = ?, Salary = ?
       WHERE employee_id = ?`,
      [Name, Age, Email, Salary, employee_id]
    );
    res.json(data);
  } catch (errors) {
    res.json(errors);
  }
});

app.listen(port, () => {
  console.log("Server is running on port " + port);
});
