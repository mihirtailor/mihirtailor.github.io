const express = require("express");
const app = express();
const arithmeticFunctions = require("./arithmeticFunctions");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.post("/", (req, res) => {
  const { operation, value_1, value_2 } = req.body;
  let result;
  let operationName;

  switch (operation) {
    case "add":
      result = arithmeticFunctions.add(value_1, value_2);
      operationName = "Addition";
      break;
    case "sub":
      result = arithmeticFunctions.sub(value_1, value_2);
      operationName = "Subtraction";
      break;
    case "mul":
      result = arithmeticFunctions.multiply(value_1, value_2);
      operationName = "Multiplication";
      break;
    case "div":
      result = arithmeticFunctions.divide(value_1, value_2);
      operationName = "Division";
      break;
    default:
      return res.status(400).json({ error: "Invalid operation" });
  }

  console.log(`Operation: ${operationName}`);
  console.log(`Value 1: ${value_1}`);
  console.log(`Value 2: ${value_2}`);
  console.log(`Result: ${result}`);

  res.json({
    operation: operationName,
    value_1,
    value_2,
    result,
  });
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
