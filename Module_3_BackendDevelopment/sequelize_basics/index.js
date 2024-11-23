const express = require("express");
const app = express();
const { sequelize } = require("./connection.js");
const Department = require("./models/department.js");
const Employee = require("./models/employee.js");
const mysql = require("mysql2");

const employee_router = require("./routers/employee.js");

app.use(express.json());
app.use("/employees/", employee_router);

Department.hasMany(Employee, {
  foreignKey: {
    name: "department_id",
  },
});
Employee.belongsTo(Department, {
  foreignKey: {
    name: "department_id",
  },
});

sequelize
  .sync()
  .then((response) => {
    console.log(response);
  })
  .catch((error) => {
    console.log(error);
  });

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
