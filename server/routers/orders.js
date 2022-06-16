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

// Get (read) all records from the collection
router.get("/", (request, response) => {
  Order.find({}, (error, record) => {
    if (error) return response.sendStatus(500).json(error);
    return response.json(record);
  });
});

// Get a single record by ID using a query parameter
router.get("/:id", (request, response) => {
  Order.findById(request.params.id, (error, record) => {
    if (error) return response.sendStatus(500).json(error);
    return response.json(record);
  });
});

router.delete("/:id", (request, response) => {
  Order.findByIdAndRemove(request.params.id, {}, (error, record) => {
    if (error) return response.sendStatus(500).json(error);
    return response.json(record);
  });
});

router.put("/:id", (request, response) => {
  const body = request.body;
  Order.findByIdAndUpdate(
    request.params.id,
    {
      $set: {
        // Take note that the customer is not included, so it can't
        Color35: body.Color35,
        Bw35: body.Bw35,
        Color120: body.Color120,
        Bw120: body.Bw120,
        Scans: body.Scans,
        yesNo: body.yesNo
      }
    },
    {
      new: true,
      upsert: true
    },
    (error, record) => {
      if (error) return response.sendStatus(500).json(error);
      return response.json(record);
    }
  );
});

router.get("/:atrib/:value", (request, response) => {
  let filter = {};
  filter[request.params.atrib] = request.params.value;
  Order.find(filter, (error, record) => {
    if (error) return response.status(500).json(error);
    return response.json(record);
  });
});

module.exports = router;
