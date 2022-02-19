const express = require("express");
const router = express.Router();

const Payment = require("../models/payment.model");

router.get("/", async (req, res) => {
  res.send("Hello Payment");
});

router.post("/", async (req, res) => {
  try {
    console.log("req.body");
    console.log(req.body);
    const payment = await Payment.create({
        "employee_id": "6210d92fd02a76455a1dbfff",
        "month":"August",
        "year": "2021",
        "amount": "70000"
    });
    res.status(201).send(payment);
  } catch (err) {
    console.log(err);
  }
});

module.exports = router;
