const express = require("express");
var { MongoClient } = require("mongodb");

const connectionString = "mongodb://localhost:27017";
var router = express.Router();
const client = new MongoClient(connectionString, { useUnifiedTopology: true });

router.get("/", async function (req, res) {
  await client.connect();
  const db = await client.db("firstdb");
  const collection = db.collection("flights");

  let query = req.query;
  console.log(query.sort);
  let flightArr = {};
  if (query.sort == "low") {
    flightArr = await collection
      .aggregate([{ $sort: { price: 1 } }, { $project: { _id: 0 } }])
      .toArray();
  } else if (query.sort == "high") {
    flightArr = await collection
      .aggregate([{ $sort: { price: -1 } }, { $project: { _id: 0 } }])
      .toArray();
  } else {
    flightArr = await collection.find({}, { _id: 0 }).toArray();
  }
  console.log(flightArr);
  res.json(flightArr);
});

module.exports = router;
