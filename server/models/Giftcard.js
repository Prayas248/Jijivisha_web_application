const mongoose = require('mongoose')

const GiftCardSchema = new mongoose.Schema({
  id: {
    type: String,
    
    unique: true
  },

  code: {
    type: String,
    required: true,
  },

  order: {
    type:mongoose.Schema.Types.ObjectId,
    ref : "Order" 
  },

  balance: {
    type: Number,
    required: true,
  },

  redeem: {
    type: String,
    default: null,
  },

  expiryOn: {
    type:Date
  },

  recepient: {
    type: String,
    required: true,
  },
  recepient_info:{
    type:Boolean,
    default:false
  },
  recepient_delivery:{
    type:Boolean,
    default:false
  },
  email_setting:{
    type:Boolean,
    default:false
  },
  enable: {
    type: Boolean,
    default: true
  },

  codePattern: {
    type: String
  },

  email: {
    type: {
      notification: {
        type: Boolean,
        default: false
      },
      events: {
        onDelivery: {
          type: Boolean,
          default: false
        },
        onUse: {
          type: Boolean,
          default: false
        }
      }
    },
    required: true
  }
})

module.exports = mongoose.model("Giftcard", GiftCardSchema)


