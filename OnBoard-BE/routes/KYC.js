let mongoose = require("mongoose"),
  express = require("express"),
  router = express.Router();

// KYC Model
let kycSchema = require("../models/KYC");

// CREATE KYC
router.route("/cerate-KYC").post((req, res, next) => {
  KYCSchema.create(req.body, (error, data) => {
    if (error) {
      return next(error);
    } else {
      console.log(data);
      res.json(data);
    }
  });
});

// READ KYCs
router.route("/").get((req, res) => {
  KYCSchema.find((error, data) => {
    if (error) {
      return next(error);
    } else {
      res.json(data);
    }
  });
});

// Get Single KYC
router.route("/edit-KYC/:id").get((req, res) => {
  KYCSchema.findById(req.params.id, (error, data) => {
    if (error) {
      return next(error);
    } else {
      res.json(data);
    }
  });
});

// Update KYC
router.route("/update-KYC/:id").put((req, res, next) => {
  KYCSchema.findByIdAndUpdate(
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
        console.log("KYC updated successfully !");
      }
    }
  );
});

// Delete KYC
router.route("/delete-KYC/:id").delete((req, res, next) => {
  KYCSchema.findByIdAndRemove(req.params.id, (error, data) => {
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
