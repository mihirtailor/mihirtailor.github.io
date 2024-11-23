var express = require("express");
var app = express();
app.use(express.json());

var server = app.listen(3000, function () {
  console.log("Server is running on port 3000");
});

const students = [
  {
    id: 1,
    name: "John",
    email: "john@example.com",
    age: 25,
  },
  {
    id: 2,
    name: "Jane",
    email: "jane@example.com",
    age: 30,
  },
  {
    id: 3,
    name: "Bob",
    email: "bob@example.com",
    age: 35,
  },
];

app.get("/students", (req, res) => {
  return res.send(students);
});

app.get("/students/:id", (req, res) => {
  const student = students.find((element) => {
    if (element.id === parseInt(req.params.id)) return true;
  });

  if (student) {
    return res.status(200).send(student);
  }
  return res.status(404).send("Wrong ID, Student not found");
});

app.post("/students/add_student", (req, res) => {
  const student = {
    id: students.length + 1,
    name: req.body.name,
    email: req.body.email,
    age: req.body.age,
  };
  students.push(student);
  return res.status(200).send(student);
});

app.put("/students/overwrite_student/:id", (req, res) => {
  const student = students.find((element) => {
    if (element.id === parseInt(req.params.id)) return true;
  });
  if (student) {
    student.id = req.body.id;
    student.name = req.body.name;
    student.email = req.body.email;
    student.age = req.body.age;
    return res.status(200).send(student);
  }
  return res.status(404).send("wrong ID, Student not found");
});

app.patch("/students/update_student/:id", (req, res) => {
  const student = students.find((element) => {
    if (element.id === parseInt(req.params.id)) {
      return true;
    }
  });
  if (student) {
    for (let i in req.body) {
      student[i] = req.body[i];
    }
    return res.status(200).send(student);
  }
  return res.status(404).send("Wrong ID, No Student Found");
});
