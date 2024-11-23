const { sequelize, Sequelize } = require("../connection.js");
const Employee = sequelize.define("employee", {
  ID: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
  },
  Name: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  Salary: {
    type: Sequelize.DOUBLE,
    allowNull: true,
  },
});

module.exports = Employee;
