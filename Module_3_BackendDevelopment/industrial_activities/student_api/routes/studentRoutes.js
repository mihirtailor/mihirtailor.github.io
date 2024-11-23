const express = require("express");
const router = express.Router();

// Sample student data
let students = [
  {
    id: 1,
    name: "John Doe",
    section: "A",
    gpa: 3.8,
    nationality: "American",
  },
  {
    id: 2,
    name: "Sarah Smith",
    section: "B",
    gpa: 3.9,
    nationality: "Canadian",
  },
];

// GET all students
router.get("/", (req, res) => {
  res.json(students);
});

// GET student by ID
router.get("/:id", (req, res) => {
  const student = students.find((s) => s.id === parseInt(req.params.id));
  if (student) {
    res.json(student);
  } else {
    res.status(404).json({ message: "Student not found" });
  }
});

// GET students by section
router.get("/section/:section", (req, res) => {
  const filteredStudents = students.filter(
    (s) => s.section === req.params.section
  );
  res.json(filteredStudents);
});

// POST new student
router.post("/add_student", (req, res) => {
  const newStudent = {
    id: students.length + 1,
    name: req.body.name,
    section: req.body.section,
    gpa: req.body.gpa,
    nationality: req.body.nationality,
  };
  students.push(newStudent);
  res.status(201).json(newStudent);
});

// PUT update student
router.put("/:id", (req, res) => {
  const studentIndex = students.findIndex(
    (s) => s.id === parseInt(req.params.id)
  );
  if (studentIndex !== -1) {
    students[studentIndex] = {
      ...students[studentIndex],
      ...req.body,
      id: parseInt(req.params.id),
    };
    res.json(students[studentIndex]);
  } else {
    res.status(404).json({ message: "Student not found" });
  }
});

// DELETE student
router.delete("/:id", (req, res) => {
  const studentIndex = students.findIndex(
    (s) => s.id === parseInt(req.params.id)
  );
  if (studentIndex !== -1) {
    students = students.filter((s) => s.id !== parseInt(req.params.id));
    res.status(204).send();
  } else {
    res.status(404).json({ message: "Student not found" });
  }
});

module.exports = router;
