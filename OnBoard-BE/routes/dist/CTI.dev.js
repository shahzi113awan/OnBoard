"use strict";

var mongoose = require("mongoose"),
    express = require("express"),
    router = express.Router(); // CTI Model


var CTISchema = require("../models/CTI"); // CREATE CTI


router.route("/cerate-CTI").post(function (req, res, next) {
  CTISchema.create(req.body, function (error, data) {
    if (error) {
      return next(error);
    } else {
      console.log(data);
      res.json(data);
    }
  });
}); // READ CTIs

router.route("/CTI").get(function (req, res) {
  CTISchema.find(function (error, data) {
    if (error) {
      return next(error);
    } else {
      res.json(data);
    }
  });
}); // Get Single CTI

router.route("/edit-CTI/:id").get(function (req, res) {
  CTISchema.findById(req.params.id, function (error, data) {
    if (error) {
      return next(error);
    } else {
      res.json(data);
    }
  });
}); // Update CTI

router.route("/update-CTI/:id").put(function (req, res, next) {
  CTISchema.findByIdAndUpdate(req.params.id, {
    $set: req.body
  }, function (error, data) {
    if (error) {
      return next(error);
      console.log(error);
    } else {
      res.json(data);
      console.log("CTI updated successfully !");
    }
  });
}); // Delete CTI

router.route("/delete-CTI/:id")["delete"](function (req, res, next) {
  CTISchema.findByIdAndRemove(req.params.id, function (error, data) {
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