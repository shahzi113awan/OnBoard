let mongoose = require("mongoose"),
  express = require("express"),
  router = express.Router();

// KYB Model
let KYBSchema = require("../models/KYB");

// CREATE KYB
router.route("/cerate-kyb").post((req, res, next) => {
  KYBSchema.create(req.body, (error, data) => {
    if (error) {
      return next(error);
    } else {
      console.log(data);
      res.json(data);
    }
  });
});

// READ KYBs
router.route("/KYB").get((req, res) => {
  KYBSchema.find((error, data) => {
    if (error) {
      return next(error);
    } else {
      res.json(data);
    }
  });
});

// Get Single KYB
router.route("/edit-kyb/:id").get((req, res) => {
  KYBSchema.findById(req.params.id, (error, data) => {
    if (error) {
      return next(error);
    } else {
      res.json(data);
    }
  });
});

// Update KYB
router.route("/update-kyb/:id").put((req, res, next) => {
  KYBSchema.findByIdAndUpdate(
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
        console.log("kyb updated successfully !");
      }
    }
  );
});

// Delete KYB
router.route("/delete-kyb/:id").delete((req, res, next) => {
  KYBSchema.findByIdAndRemove(req.params.id, (error, data) => {
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
