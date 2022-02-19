const express = require("express");
const router = express.Router();

const Employer = require("../models/employer.model");

router.get("/", async (req, res) => {
  res.send("Hello Employer");
});

module.exports = router;
