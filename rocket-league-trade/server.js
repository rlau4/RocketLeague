var express = require("express");
const path = require('path');
var logger = require("morgan");
var mongoose = require("mongoose");
const router = require('express').Router();


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
const TradesRouter = require('./routes/trades');

router.use((req, res) => {
  res.sendFile(path.join(__dirname, '/client/build/index.html'));
});

app.use("/trades", TradesRouter)

// Start the server
app.listen(PORT, function() {
  console.log("App running on port " + PORT + "!");
});
