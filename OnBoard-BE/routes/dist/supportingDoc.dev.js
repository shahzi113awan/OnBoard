"use strict";

var mongoose = require("mongoose"),
    express = require("express"),
    router = express.Router(); // Student Model


var SDCSchema = require("../models/supportingDoc"); // CREATE Student


router.route("/cerate-sdc").post(function (req, res, next) {
  SDCSchema.create(req.body, function (error, data) {
    if (error) {
      return next(error);
    } else {
      console.log(data);
      res.json(data);
    }
  });
}); // READ Students

router.route("/SDC").get(function (req, res) {
  SDCSchema.find(function (error, data) {
    if (error) {
      return next(error);
    } else {
      res.json(data);
    }
  });
}); // Get Single Student

router.route("/edit-sdc/:id").get(function (req, res) {
  SDCSchema.findById(req.params.id, function (error, data) {
    if (error) {
      return next(error);
    } else {
      res.json(data);
    }
  });
}); // Update Student

router.route("/update-sdc/:id").put(function (req, res, next) {
  SDCSchema.findByIdAndUpdate(req.params.id, {
    $set: req.body
  }, function (error, data) {
    if (error) {
      return next(error);
      console.log(error);
    } else {
      res.json(data);
      console.log("sdc updated successfully !");
    }
  });
}); // Delete Student

router.route("/delete-sdc/:id")["delete"](function (req, res, next) {
  SDCSchema.findByIdAndRemove(req.params.id, function (error, data) {
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