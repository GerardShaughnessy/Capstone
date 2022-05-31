const { Router } = require("express");
const Order = require("../models/Orders");

const router = Router();

// Create record in MongoDB Atlas using Mongoose.js ORM
router.post("/", (request, response) => {
  const newOrder = new Order(request.body);
  newOrder.save((error, record) => {
    if (error) return response.sendStatus(500).json(error);
    return response.json(record);
  });
});

module.exports = router;
