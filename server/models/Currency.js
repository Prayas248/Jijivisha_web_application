
const mongoose = require("mongoose");

const Currency = mongoose.Schema({
  country:{
    type:[String],
  },  
  name: {
    type: String,
    required: true
  },

  symbol: {
    type: String,
    required: true
  },

  displayPosition: {
    type: String,
    enum: ["left", "right", "top", "bottom"],
    required: true,
  },

  exchangeRateAndFee: {
    type: Number,
    required: true
  },

  ishidden: {
    type: Boolean,
    default: false
  },

  thousandSeperator: {
    type: String,
    enum: [",", ".", " "],
    default: ",",
    trim: true
  },

  decimalSeperator: {
    type: String,
    enum: [",", ".", " "],
    default: ".",
    trim: true
  },

  actions: {
    type: String,
    enum: ["update", "remove"],
   
    trim: true
  },

  checkoutCurrency: {
    type: Boolean,
    default: true
  },

  default: {
    type: Boolean,
    default: false
  }

})

module.exports = mongoose.model("Curreny", Currency)
