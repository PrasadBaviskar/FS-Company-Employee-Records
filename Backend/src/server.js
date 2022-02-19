const express = require("express");
const cors = require("cors");
const app = express();
const connect = require("./configs/db");

const employeeController = require("./controllers/employee.controller");
const employerController = require("./controllers/employer.controller");
const paymentController = require("./controllers/payment.controller");

app.use("/employee", employeeController);
app.use("/employer", employerController);
app.use("/payment", paymentController);

app.use(express.json());
app.use(cors());

const start = async () => {
  await connect();
  console.log("DB Connected");
  app.listen(5000, () => {
    console.log("listening To Port 5000");
  });
};

module.exports = start;
