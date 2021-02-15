"use strict";

var mongoose = require("mongoose"),
    express = require("express"),
    router = express.Router(); // COM Model


var COMSchema = require("../models/COM"); // CREATE COM


router.route("/cerate-COM").post(function (req, res, next) {
  COMSchema.create(req.body, function (error, data) {
    if (error) {
      return next(error);
    } else {
      console.log(data);
      res.json(data);
    }
  });
}); // READ COMs

router.route("/COM").get(function (req, res) {
  COMSchema.find(function (error, data) {
    if (error) {
      return next(error);
    } else {
      res.json(data);
    }
  });
}); // Get Single COM

router.route("/edit-COM/:id").get(function (req, res) {
  COMSchema.findById(req.params.id, function (error, data) {
    if (error) {
      return next(error);
    } else {
      res.json(data);
    }
  });
}); // Update COM

router.route("/update-COM/:id").put(function (req, res, next) {
  COMSchema.findByIdAndUpdate(req.params.id, {
    $set: req.body
  }, function (error, data) {
    if (error) {
      return next(error);
      console.log(error);
    } else {
      res.json(data);
      console.log("COM updated successfully !");
    }
  });
}); // Delete COM

router.route("/delete-COM/:id")["delete"](function (req, res, next) {
  COMSchema.findByIdAndRemove(req.params.id, function (error, data) {
    if (error) {
      return next(error);
    } else {
      res.status(200).json({
        msg: data
      });
    }
  });
});
module.exports = router;