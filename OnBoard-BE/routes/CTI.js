let mongoose = require("mongoose"),
  express = require("express"),
  router = express.Router();

// CTI Model
let CTISchema = require("../models/CTI");

// CREATE CTI
router.route("/cerate-CTI").post((req, res, next) => {
  CTISchema.create(req.body, (error, data) => {
    if (error) {
      return next(error);
    } else {
      console.log(data);
      res.json(data);
    }
  });
});

// READ CTIs
router.route("/CTI").get((req, res) => {
  CTISchema.find((error, data) => {
    if (error) {
      return next(error);
    } else {
      res.json(data);
    }
  });
});

// Get Single CTI
router.route("/edit-CTI/:id").get((req, res) => {
  CTISchema.findById(req.params.id, (error, data) => {
    if (error) {
      return next(error);
    } else {
      res.json(data);
    }
  });
});

// Update CTI
router.route("/update-CTI/:id").put((req, res, next) => {
  CTISchema.findByIdAndUpdate(
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
        console.log("CTI updated successfully !");
      }
    }
  );
});

// Delete CTI
router.route("/delete-CTI/:id").delete((req, res, next) => {
  CTISchema.findByIdAndRemove(req.params.id, (error, data) => {
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
