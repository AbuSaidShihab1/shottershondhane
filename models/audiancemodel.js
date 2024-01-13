const mongoose = require("mongoose");

const audiancemodel = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    ocupation: {
      type: String,
      required: true,
    },
    address: {
      type: String,
      default: 0,
    },
    gender: {
      type: String,
      default: 0,
    },
    religion: {
      type: String,
      default: 0,
    },
    nationality: {
      type: String,
      default: 0,
    },
    mobile: {
      type: String,
      default: 0,
    },
    email: {
      type: String,
      default: 0,
    },
  },
  { timestamps: true }
);

module.exports = new mongoose.model("Audianceinfo", audiancemodel);
