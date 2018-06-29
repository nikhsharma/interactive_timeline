const express = require("express");
const app = express();
const parser = require("body-parser");

const port = 3001;

app.use(parser.json());
app.use(parser.urlencoded({ extended: true }));

const MongoClient = require("mongodb").MongoClient;

MongoClient.connect(
  "mongodb://localhost:27017",
  (err, client) => {
    if (err) next(err);
    const db = client.db("historyDB");
    console.log("Connected to db...");

    app.get("/api/history", (req, res, next) => {
      const historyCollection = db.collection("rome");
      historyCollection.find().toArray((err, rome) => {
        if (err) next(err);
        res.json(rome);
      });
    });

    app.post("/api/history", (req, res, next) => {
      const historyCollection = db.collection("rome");
      console.log(req.body);
      const newEvent = req.body;
      historyCollection.insert(newEvent, (err, result) => {
        if (err) next(err);
        res.status(201);
        res.json(result.ops[0]);
      });
    });

    app.listen(port, () => {
      console.log("App listening on port", port);
    });
  }
);
