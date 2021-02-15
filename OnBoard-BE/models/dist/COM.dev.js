"use strict";

var mongoose = require("mongoose");

var Schema = mongoose.Schema;
var COMSchema = new Schema({
  Name: {
    type: String
  }
}, {
  collection: "Company"
});
module.exports = mongoose.model("Company", COMSchema);