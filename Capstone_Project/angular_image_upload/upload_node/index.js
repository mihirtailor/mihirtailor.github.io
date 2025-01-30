const express = require("express");
const cors = require("cors");
const app = express();
const multer = require("multer");
const port = 3000;
app.use(express.json());
app.use(cors());
app.use(express.json());

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads/");
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + "-" + file.originalname);
  },
});

const upload = multer({ storage });

app.post("/upload", upload.single("file"), (req, res) => {
  res.json({ message: "File uploaded successfully" });
});

app.listen(3000, () => {
  console.log("Server is running on port", port);
});
