const mongoose = require("mongoose");

const paymentSchema = new mongoose.Schema(
  {
    employee_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "employee",
    },
    month: { type: String },
    year: { type: String },
    amount: { type: String },
  },
  {
    versionKey: false,
  }
);

module.exports = mongoose.model("payment", paymentSchema);
