const app = require("./connection");
const studentRoutes = require("./routes/studentRoutes");

app.use("/students", studentRoutes);
