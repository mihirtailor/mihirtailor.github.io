const Employee = require("../models/employee.js");
const router = require("express").Router();

router.post("/add_employee", async (req, res) => {
  try {
    const employee = await Employee.create({
      Name: req.body.Name,
      Salary: req.body.Salary,
    });
    res.status(201).json(employee);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.get("/get_employees", async (req, res) => {
  try {
    const employees = await Employee.findAll();
    return res.status(200).json(employees);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
});

// get employee by id using where clause

router.get("/get_employees/:id", async (req, res) => {
  try {
    const employee = await Employee.findAll({
      where: {
        ID: req.params.id,
      },
    });
    return res.status(200).json(employee);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
});

// router.get("/get_employee/:id", async (req, res) => {
//   try {
//     const employee = await Employee.findByPk(req.params.id);
//     return res.status(200).json(employee);
//   } catch (error) {
//     return res.status(500).json({ error: error.message });
//   }
// });

// delete employee by id using where clause

router.delete("/delete_employee/:id", async (req, res) => {
  try {
    const employee = await Employee.destroy({
      where: {
        ID: req.params.id,
      },
    });
    return res.status(200).json(employee);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
});

// update employee by id using where clause
router.put("/update_employee/:id", async (req, res) => {
  try {
    const employee = await Employee.update(req.body, {
      where: {
        ID: req.params.id,
      },
    });
    return res.status(200).json(employee);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
});

module.exports = router;
