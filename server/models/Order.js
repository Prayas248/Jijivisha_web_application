const mongoose = require("mongoose");

const Order = new mongoose.Schema({
    order_no: {
        type: Number,
        trim: true,
    },
    product : [{
        type : mongoose.Schema.Types.ObjectId,
        ref : "Product",
      }],
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User" //reference to the product model
    },
    status:{
        type: String,
        default:"On hold"
        
    },
    firstName:{
        type:String,
    },
    lastName:{
        type:String,
    },
    companyName:{
        type:String,
    },
    streetAddress:{
        type:String,
    },
    apartment:{
        type:String,
    },
    city:{
        type:String,
    },
    state:{
        type:String
    },
    country:{
        type:String,
    },
    code:{
        type:Number,
    },
    amount:{
        type: Number,
        required:true,
    },
    user_ip:{
        type:String,
    },
    payment:{
        description:{
            type:String,
        },
        data:{
            type:Date,
            default:Date.now
        }
    },
    billing:{
        type:String,
    },
    shipping:{
        type:String,
    },
    razorpay_order_id:{
        type:String,
    },
    razorpay_payment_id:{
        type:String,
    },
    razorpay_signature:{
        type:String,
    },
    note:{
        type:String,
    },
    paymentMethod:{
        type:String,
    },
    email:{
        type:String,
    },
    phone:{
        type:Number,
    },
    date: {
        type: Date,
        default: Date.now,
    }

});

module.exports = mongoose.model("Order", Order);
