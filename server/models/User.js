const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    trim: true,
  },
  display_name:{
    type: String,
    trim: true,
  },
  email: {
    type: String,
    require: true,
    trim: true,
  },
  password: {
    type: String,
    require: true,
  },
  role:{
    type: String,
    default:"Customer",
  },
  cart : [{
    type : mongoose.Schema.Types.ObjectId,
    ref : "Cart",
  }],
  wishlist : [{
    type : mongoose.Schema.Types.ObjectId,
    ref : "Wishlist",
  }],
  order : [{
    type : mongoose.Schema.Types.ObjectId,
    ref : "Order",
  }],
  latest:{
    type:Date,
    
  },
  date:{
    type:Date,
    default:Date.now,
  }

});

module.exports = mongoose.model("User", userSchema);
