"use strict";

var express = require("express");

var mongoose = require("mongoose");

var cors = require("cors");

var bodyParser = require("body-parser");

var dbConfig = require("./database/db");

var createError = require("http-errors"); // Express Route


var KYC = require("./routes/KYC");

var CI = require("./routes/CI");

var KYB = require("./routes/KYB");

var CTI = require("./routes/CTI");

var COM = require("./routes/COM");

var SDC = require("./routes/supportingDoc"); // Connecting mongoDB Database


mongoose.Promise = global.Promise;
mongoose.connect(dbConfig.db, {
  useNewUrlParser: true
}).then(function () {
  console.log("Database sucessfully connected!");
}, function (error) {
  console.log("Could not connect to database : " + error);
});
var app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(cors());
app.use("/onboard", KYC);
app.use("/onboard", CI);
app.use("/onboard", KYB);
app.use("/onboard", CI);
app.use("/onboard", CTI);
app.use("/onboard", SDC);
app.use("/onboard", COM); // PORT

var port = process.env.PORT || 4000;
var server = app.listen(port, function () {
  console.log("Connected to port " + port);
}); // 404 Error

app.use(function (req, res, next) {
  next(createError(404));
});
app.use(function (err, req, res, next) {
  console.error(err.message);
  if (!err.statusCode) err.statusCode = 500;
  res.status(err.statusCode).send(err.message);
});