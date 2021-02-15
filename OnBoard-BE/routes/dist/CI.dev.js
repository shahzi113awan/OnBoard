"use strict";

var mongoose = require("mongoose"),
    express = require("express"),
    router = express.Router(); // CI Model


var CISchema = require("../models/CI"); // CREATE CI


router.route("/cerate-CI").post(function (req, res, next) {
  var obj = new CISchema(req.body);
  obj.save().then(function (obj) {
    console.log(req.body);
    console.log(obj);
    res.status(200).json({
      obj: "CI has been added"
    });
  })["catch"](function (err) {
    res.status(400).send("there is error in saving");
  });
}); // READ CIs

router.route("/CI").get(function (req, res) {
  CISchema.find(function (error, data) {
    if (error) {
      return next(error);
    } else {
      res.json(data);
    }
  });
}); // Get Single CI

router.route("/edit-CI/:id").get(function (req, res) {
  CISchema.findById(req.params.id, function (error, data) {
    if (error) {
      return next(error);
    } else {
      res.json(data);
    }
  });
}); // Update CI

router.route("/update-CI/:id").put(function (req, res, next) {
  CISchema.findByIdAndUpdate(req.params.id, {
    $set: req.body
  }, function (error, data) {
    if (error) {
      return next(error);
      console.log(error);
    } else {
      res.json(data);
      console.log("CI updated successfully !");
    }
  });
}); // Delete CI

router.route("/delete-CI/:id")["delete"](function (req, res, next) {
  CISchema.findByIdAndRemove(req.params.id, function (error, data) {
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