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
    enum: ["thin", "chicago", "deep-dish", "hella-thick"]
  },
  prints: {
    type: String,
    validate: /^[A-Za-z0-9 ]*$/
  },
  scans: {
    type: String,
    required: true,
    validate: /^[A-Za-z0-9 ]*$/
  },
  requests: [String]
});

const Order = mongoose.model("Order", orderSchema);

module.exports = Order;
