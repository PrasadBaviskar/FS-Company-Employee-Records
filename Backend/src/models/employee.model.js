const mongoose = require("mongoose");

const employeeSchema = mongoose.Schema({
  name: { type: String, required: true },
  department: { type: String, required: true },
  gender: { type: String, required: true },
  joining_data: { type: Date, required: true },
});

module.exports = mongoose.model("employee", employeeSchema);

// Employee - Name, Department, Gender & Joining Date (Can have multiple Salary Payments)
// Payment - Month, Year and Amount (Belongs to a particular Employee)
