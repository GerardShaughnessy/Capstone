// const { type } = require("express/lib/response");
const mongoose = require("mongoose");
//
const orderSchema = new mongoose.Schema({
  customer: {
    type: String,
    required: true,
    validate: /^[A-Za-z0-9 ]*$/
  },
  Color35: {
    type: Number
  },
  BW35: {
    type: Number
  },
  Color120: {
    type: Number
  },
  BW120: {
    type: Number
  },
  Maybe: {
    type: String,
    require: true,
    enum: ["Yes for all", "Yes for 35mm only", "Yes for 120mm only", "No"]
  },
  yes_no: {
    type: String,
    require: true,
    enum: ["Yes", "No"]
  }
});

const Order = mongoose.model("Order", orderSchema);

module.exports = Order;
