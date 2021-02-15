"use strict";

var mongoose = require("mongoose"),
    express = require("express"),
    router = express.Router(); // KYB Model


var KYBSchema = require("../models/KYB"); // CREATE KYB


router.route("/cerate-kyb").post(function (req, res, next) {
  KYBSchema.create(req.body, function (error, data) {
    if (error) {
      return next(error);
    } else {
      console.log(data);
      res.json(data);
    }
  });
}); // READ KYBs

router.route("/KYB").get(function (req, res) {
  KYBSchema.find(function (error, data) {
    if (error) {
      return next(error);
    } else {
      res.json(data);
    }
  });
}); // Get Single KYB

router.route("/edit-kyb/:id").get(function (req, res) {
  KYBSchema.findById(req.params.id, function (error, data) {
    if (error) {
      return next(error);
    } else {
      res.json(data);
    }
  });
}); // Update KYB

router.route("/update-kyb/:id").put(function (req, res, next) {
  KYBSchema.findByIdAndUpdate(req.params.id, {
    $set: req.body
  }, function (error, data) {
    if (error) {
      return next(error);
      console.log(error);
    } else {
      res.json(data);
      console.log("kyb updated successfully !");
    }
  });
}); // Delete KYB

router.route("/delete-kyb/:id")["delete"](function (req, res, next) {
  KYBSchema.findByIdAndRemove(req.params.id, function (error, data) {
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