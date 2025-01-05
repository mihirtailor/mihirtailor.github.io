const { connection } = require("./connection");
const express = require("express");
const app = express();
const port = 3000;
const bcrypt = require("bcrypt");

app.use(express.json());

app.post("/register/", async (req, res) => {
  const { first_name, last_name, email, password } = req.body;

  if (!first_name || !password || !email) {
    return res.json({
      error: true,
      message: "Please provide all the required values",
    });
  }

  // hash the password
  const hashPassword = await bcrypt.hash(password, 10);

  try {
    const [data] = await connection.query(
      `INSERT INTO angular_node_auth.users (first_name, last_name, email, password) 
            VALUES (?, ?, ?, ?)`,
      [first_name, last_name, email, hashPassword]
    );
    return res.json({
      error: false,
      message: "User registered successfully",
      data: data,
    });
  } catch (errors) {
    return res.json({
      error: true,
      message: errors.message,
    });
  }
});

app.post("/login/", async (req, res) => {
  const { email, password } = req.body;
  try {
    const [data] = await connection.query(
      `SELECT * FROM angular_node_auth.users WHERE email = ?`,
      [email]
    );
    if (data.length > 0) {
      const isPasswordCorrect = await bcrypt.compare(
        password,
        data[0].password
      );
      if (isPasswordCorrect) {
        return res.json({
          error: false,
          message: "User logged in successfully",
          data: data,
        });
      } else {
        return res.json({
          error: true,
          message: "Incorrect password",
        });
      }
    } else {
      return res.json({
        error: true,
        message: "User not found",
      });
    }
  } catch {
    return res.json({
      error: true,
      message: errors.message,
    });
  }
});

app.listen(3000, () => {
  console.log("Server is running on port", port);
});
