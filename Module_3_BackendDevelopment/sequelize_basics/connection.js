const { Sequelize } = require("sequelize");
const mysql = require("mysql2");

const sequelize = new Sequelize("sequelize", "root", "root2024", {
  host: "localhost",
  dialect: "mysql",
});

sequelize
  .authenticate()
  .then(() => {
    console.log("Connection has been established successfully.");
  })
  .catch((error) => {
    console.error("Unable to connect to the database: ", error);
  });

module.exports.sequelize = sequelize;
module.exports.Sequelize = Sequelize;
