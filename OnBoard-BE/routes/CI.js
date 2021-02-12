let mongoose = require("mongoose"),
  express = require("express"),
  router = express.Router();

// CI Model
let CISchema = require("../models/CI");

// CREATE CI
router.route("/cerate-CI").post((req, res, next) => {
  CISchema.create(req.body, (error, data) => {
    if (error) {
      return next(error);
    } else {
      console.log(data);
      res.json(data);
    }
  });
});

// READ CIs
router.route("/").get((req, res) => {
  CISchema.find((error, data) => {
    if (error) {
      return next(error);
    } else {
      res.json(data);
    }
  });
});

// Get Single CI
router.route("/edit-CI/:id").get((req, res) => {
  CISchema.findById(req.params.id, (error, data) => {
    if (error) {
      return next(error);
    } else {
      res.json(data);
    }
  });
});

// Update CI
router.route("/update-CI/:id").put((req, res, next) => {
  CISchema.findByIdAndUpdate(
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
        console.log("CI updated successfully !");
      }
    }
  );
});

// Delete CI
router.route("/delete-CI/:id").delete((req, res, next) => {
  CISchema.findByIdAndRemove(req.params.id, (error, data) => {
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
