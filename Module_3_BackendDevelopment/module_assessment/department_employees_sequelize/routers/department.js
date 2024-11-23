const Department = require("../models/department.js");
const router = require("express").Router();

router.post("/add_department", async (req, res) => {
  try {
    const department = await Department.create({
      DepartmentName: req.body.DepartmentName,
    });
    res.status(201).json(department);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.get("/get_departments", async (req, res) => {
  try {
    const departments = await Department.findAll();
    return res.status(200).json(departments);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
});

router.get("/get_departments/:id", async (req, res) => {
  try {
    const department = await Department.findAll({
      where: {
        ID: req.params.id,
      },
    });
    return res.status(200).json(department);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
});

router.delete("/delete_department/:id", async (req, res) => {
  try {
    const department = await Department.destroy({
      where: {
        ID: req.params.id,
      },
    });
    return res.status(200).json(department);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
});

router.put("/update_department/:id", async (req, res) => {
  try {
    const department = await Department.update(req.body, {
      where: {
        ID: req.params.id,
      },
    });
    return res.status(200).json(department);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
});

module.exports = router;
