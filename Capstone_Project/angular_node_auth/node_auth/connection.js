const mysql = require("mysql2");

const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "root2024",
  database: "angular_node_auth",
});

connection.connect((error) => {
  if (error) {
    console.log("Error connecting to database");
  } else {
    console.log("Connected to database");
  }
});

module.exports = connection;
