const mongoose = require("mongoose");
const Schema = mongoose.Schema;

let SDCSchema = new Schema(
  {
    fsd_cbs: {
      type: String,
    },
    fsd_pbs: {
      type: String,
    },
    fsd_pow: {
      type: String,
    },
    fsd_cap: {
      type: String,
    },
    lta_gfl: {
      type: String,
    },
    lta_cra: {
      type: String,
    },
    lta_fdsa: {
      type: String,
    },
    lta_fbo_cr: {
      type: String,
    },
  },
  {
    collection: "Supporting Doc",
  }
);

module.exports = mongoose.model("SDC", SDCSchema);
