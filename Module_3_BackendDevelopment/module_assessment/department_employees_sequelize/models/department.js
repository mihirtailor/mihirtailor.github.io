const { sequelize, Sequelize } = require("../connection.js");
const Department = sequelize.define("department", {
  ID: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
  },
  DepartmentName: {
    type: Sequelize.STRING,
  },
});

module.exports = Department;
