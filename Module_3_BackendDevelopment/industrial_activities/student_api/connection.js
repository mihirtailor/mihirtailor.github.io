const express = require("express");
const app = express();

// Middleware for parsing JSON bodies
app.use(express.json());

// Request counter
let requestCount = 0;

// Custom middleware for logging requests
app.use((req, res, next) => {
  requestCount++;
  console.log(`Request #${requestCount} - Method: ${req.method}`);
  next();
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

module.exports = app;
