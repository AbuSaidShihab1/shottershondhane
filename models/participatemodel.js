const mongoose = require("mongoose");

const participatemodel = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    fathername: {
      type: String,
      required: true,
    },
    dateofbirth: {
      type: String,
      required: true,
    },
    category: {
      type: String,
      default: 0,
    },
    class: {
      type: String,
      default: 0,
    },
    institute: {
      type: String,
      default: 0,
    },
    nationality: {
      type: String,
      default: 0,
    },
    religion: {
      type: String,
      default: 0,
    },
    gender: {
      type: String,
      default: 0,
    },
    village: {
      type: String,
      default: 0,
    },
    thana: {
      type: String,
      default: 0,
    },
    district: {
      type: String,
      default: 0,
    },
    division: {
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

module.exports = new mongoose.model("Participateinfo", participatemodel);
