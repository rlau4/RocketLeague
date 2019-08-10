var express = require("express");
var logger = require("morgan");
var mongoose = require("mongoose");


var PORT = 3000;

var db = require("./models");

var app = express();

app.use(logger("dev"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

const MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/RocketLeagueTrade";
mongoose.connect(MONGODB_URI, { useNewUrlParser: true });

// Routes

app.get("/trades", function(req, res) {
 
  db.Trade.find({})
    .then(function(dbTrade) {
      // If all Notes are successfully found, send them back to the client
      res.json(dbTrade);
    })
    .catch(function(err) {
      // If an error occurs, send the error back to the client
      res.json(err);
    });
});

// Route for saving a new Note to the db and associating it with a User
app.post("/submit", function(req, res) {
  // Create a new Note in the db
  db.Trade.create(req.body)
    .then(function(dbTrade) {
      // If a Note was created successfully, find one User (there's only one) and push the new Note's _id to the User's `notes` array
      // { new: true } tells the query that we want it to return the updated User -- it returns the original by default
      // Since our mongoose query returns a promise, we can chain another `.then` which receives the result of the query
      return db.Trade.findOneAndUpdate({}, { $push: { trades: dbTrade._id } }, { new: true });
    })
    .then(function(dbTrade) {
      // If the User was updated successfully, send it back to the client
      res.json(dbTrade);
    })
    .catch(function(err) {
      // If an error occurs, send it back to the client
      res.json(err);
    });
});

// Route to get all User's and populate them with their notes
app.get("/populatedtrade", function(req, res) {
  // Find all users
  db.Trade.find({})
    // Specify that we want to populate the retrieved users with any associated notes
    .populate("trades")
    .then(function(dbTrade) {
      // If able to successfully find and associate all Users and Notes, send them back to the client
      res.json(dbTrade);
    })
    .catch(function(err) {
      // If an error occurs, send it back to the client
      res.json(err);
    });
});

// Start the server
app.listen(PORT, function() {
  console.log("App running on port " + PORT + "!");
});
