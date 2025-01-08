const { connection } = require("./connection");
const express = require("express");
const cors = require("cors");
const app = express();
const port = 3000;
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const verifyUser = require("./verifyToken");

app.use(express.json());
app.use(cors());

app.get("/", verifyUser, (req, res) => {
  res.send("Hello World!");
});

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
        // generate token and send it with request
        const token = await jwt.sign(
          { user_id: data[0].user_id },
          "thisismysecretkey",
          { expiresIn: "1h" }
        );
        return res.json({
          error: false,
          message: "User logged in successfully",
          data: data,
          token: token,
        });
      } else {
        console.log(password);
        console.log(data[0].password);
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
