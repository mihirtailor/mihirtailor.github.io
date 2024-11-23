const mysql = require("mysql2");

const connection = mysql.createConnection({
  hose: "localhost",
  user: "root",
  password: "Theelements118!",
  database: "bootcamp_database",
});

connection.connect((error) => {
  if (error) console.log(error);
  console.log("Database connected");
});

module.exports = connection;
