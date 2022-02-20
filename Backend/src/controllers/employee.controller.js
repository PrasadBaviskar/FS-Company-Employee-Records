const express = require("express");
const router = express.Router();

const Employee = require("../models/employee.model");

router.get("/", async (req, res) => {
  try {
    let page = req.query.page || 1;
    let pageSize = req.query.limit || 10;
    let sk = (page - 1) * pageSize;
    let total = await Employee.countDocuments();
    let pages = Math.ceil(total / pageSize);
    // console.log(pages);
    if (page > pages) {
      return res
        .status(404)
        .json({ status: "falied", message: "Page not found" });
    }

    let Employees = await Employee.find()
      .skip(sk)
      .limit(pageSize)
      .lean()
      .exec();
    // console.log(Employees);
    res.status(200).json({
      count: Employees.length,
      pages,
      page,
      result: Employees,
    });
  } catch (err) {
    console.log(err);
  }
});

module.exports = router;
