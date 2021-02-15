let mongoose = require("mongoose"),
  express = require("express"),
  router = express.Router();

// Student Model
let SDCSchema = require("../models/supportingDoc");

// CREATE Student
router.route("/cerate-sdc").post((req, res, next) => {
  SDCSchema.create(req.body, (error, data) => {
    if (error) {
      return next(error);
    } else {
      console.log(data);
      res.json(data);
    }
  });
});

// READ Students
router.route("/SDC").get((req, res) => {
  SDCSchema.find((error, data) => {
    if (error) {
      return next(error);
    } else {
      res.json(data);
    }
  });
});

// Get Single Student
router.route("/edit-sdc/:id").get((req, res) => {
  SDCSchema.findById(req.params.id, (error, data) => {
    if (error) {
      return next(error);
    } else {
      res.json(data);
    }
  });
});

// Update Student
router.route("/update-sdc/:id").put((req, res, next) => {
  SDCSchema.findByIdAndUpdate(
    req.params.id,
    {
      $set: req.body,
    },
    (error, data) => {
      if (error) {
        return next(error);
        console.log(error);
      } else {
        res.json(data);
        console.log("sdc updated successfully !");
      }
    }
  );
});

// Delete Student
router.route("/delete-sdc/:id").delete((req, res, next) => {
  SDCSchema.findByIdAndRemove(req.params.id, (error, data) => {
    if (error) {
      return next(error);
    } else {
      res.status(200).json({
        msg: data,
      });
    }
  });
});

module.exports = router;
