const express = require("express");
const router = express.Router();

const Employee = require("../models/employee.model");

router.get("/", async (req, res) => {
  try {
    // console.log("first");
    // let page = req.params.page || 1;
    let Employees = await Employee.find().lean().exec();
    // console.log(Employees);
    res.status(201).send(Employees);
  } catch (err) {
    console.log(err);
  }
});

module.exports = router;
