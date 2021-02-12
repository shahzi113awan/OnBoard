const mongoose = require("mongoose");
const Schema = mongoose.Schema;

let KYCSchema = new Schema(
  {
    kyc_name: {
      type: String,
    },
    kyc_sHolds: {
      type: String,
    },
    kyc_pID: {
      type: String,
    },
    kyc_startDate: {
      type: String,
    },
    kyc_ExpiryDate: {
      type: String,
    },
    kyc_nationality: {
      type: String,
    },
    kyc_notarized: {
      type: String,
    },
    kyc_Address: {
      type: String,
    },
    kyc_toProof: {
      type: String,
    },
    kyc_paDocument: {
      type: String,
    },
  },
  {
    collection: "KYC",
  }
);

module.exports = mongoose.model("KYC", KYCSchema);
