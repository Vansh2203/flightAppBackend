var express = require("express");
var { MongoClient } = require("mongodb");
var connectionString = require("../mongodb/connectionstring")

// const connectionString = "mongodb://localhost:27017";
var router = express.Router();
const client = new MongoClient(connectionString, { useUnifiedTopology: true });

// const db;
// const collection;
router.get("/", async function (req, res, next) {
  // res.send('respond with a resource');
  await client.connect();
  const db = await client.db("firstdb");
  const collection = db.collection("persons");

  let { name } = req.query;
  let data = await collection.find({ $text: { $search: name } }).toArray();
  console.log(data);
  // console.log(name);
  // res.send(collection.find({$text: {$search:{name}}}))
  res.json(data);
});

router.post("/", async function (req, res) {
  await client.connect();
  const db = client.db("firstdb");
  const collection = db.collection("persons");

  const data = req.body;
  const query = req.query;
  // console.log(upload, "UPLOAD");
  let personData = await collection
    .find({ phoneNumber: data.phoneNumber },{_id:0})
    .toArray();

  if (query?.upload) {
    console.log(data);
    collection.insertOne(data);
    let personData = await collection
      .find({ phoneNumber: data.phoneNumber },{_id:0})
      .toArray();
    if (personData?.length !== 0) {
      // console.log(personData);
      return res.json({ success: "true" });
    }
  } else if (personData.length !== 0) {
    // console.log(personData,'idhar');
    return res.json({ dataRetrieved: true ,personData:personData});
  } else {
    return res.json({ dataRetrieved: false });
  }
});
/* GET users listing. */

module.exports = router;
