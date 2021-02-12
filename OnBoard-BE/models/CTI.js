const mongoose = require('mongoose')
const Schema =mongoose.Schema
let CTISchema = new Schema(
  {
    cti_fcaForm: {
      type: String,
    },
    cti_bInformation: {
      type: String,
    },
    cti_otAgreement: {
      type: String,
    },
    cti_hwUrl: {
      type: String,
    },
    cti_wCompliance: {
      type: String,
    },
    cti_wUrl_proofDomain: {
      type: String,
    },
    cti_osChart: {
      type: String,
    },
    cti_bPlan: {
      type: String,
    },
  },
  {
    collection: "Company Teading Info",
  }
);
module.exports = mongoose.model("CTI", CTISchema);