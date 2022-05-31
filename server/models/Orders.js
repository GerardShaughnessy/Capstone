const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema({
  filmSize: {
    type: String,
    required: true,
    validate: /^[A-Za-z0-9 ]*$/
  },
  filmColor: {
    type: String,
    required: true,
    enum: ["color", "B&W", "infra", "unknown"]
  },
  prints: {
    type: Boolean,
    validate: /^[A-Za-z0-9 ]*$/
  },
  scans: {
    type: Boolean,
    validate: /^[A-Za-z0-9 ]*$/
  },
  requests: [String]
});

const Order = mongoose.model("Order", orderSchema);

module.exports = Order;
