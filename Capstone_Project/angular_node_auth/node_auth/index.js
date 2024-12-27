const { connection } = require("./connection");
const express = require("express");
const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  req.body;
});

app.post("/register/", async (req, res) => {
  const { password, first_name, last_name, email } = req.body;

  if (!first_name || !password || !email) {
    return res.json({
      error: true,
      message: "Please provide all the required values",
    });
  }

  try {
    const data = await connection.promise().query(
      `
          INSERT INTO angular_node_auth.users (first_name, last_name, email, password)
          VALUES (?, ?, ?, ?)`,
      [first_name, last_name, email, password]
    );
    // return res.json({first_name, last_name, email, password})
  } catch (errors) {
    return res.json({ error: true, message: errors });
  }
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
