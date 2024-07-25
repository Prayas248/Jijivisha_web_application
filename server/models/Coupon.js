const mongoose = require('mongoose');


// Route Handler 
const Coupon = new mongoose.Schema({
    code:{
        type:String,
        required:true, //reference to the product model
    },
    discount_type: {
        type:String,
        required:true,
    },    
    enable:{
        type:Boolean,
    },
    coupon_amount: {
        type:Number,
        required:true,
    },
    free_shipping:{
        type:Boolean,
        required:true,
    },
    expiry_date:{
        type:Date,
        required:true,
    },  
    maximum_spend:{
        type:Number,
        required:true,
    }, 
    minimum_spend:{
        type:Number,
        required:true,
    },
    individual_use:{
        type:Boolean,
        required:true,
    },
    exclude_sale:{
        type:Boolean,
        required:true,
    },
    usage_limit_coupon:{
        type:Number,
        required:true,
    },
    usage_limit_user:{
        type:Number,
        required:true,
    },
    product:{
        type:mongoose.Schema.Types.ObjectId,
        ref : "Product" //reference to the product model
    },
    product_exclude:{
        type:mongoose.Schema.Types.ObjectId,
        ref : "Product" //reference to the product model
    },
    product_category:{
        type: {
            // Main category (e.g., Men, Women, Kids)
            maincategory: {
              type: String,
              required: true,
            },
            // Subcategories within the main category
            subcategories: {
              type: String,
              required: true,
            },
            lastcategories:{
               type:String,
               required:true,
            },
          },
          
    },
    exclude_category:{
        type: {
            // Main category (e.g., Men, Women, Kids)
            maincategory: {
              type: String,
              required: true,
            },
            // Subcategories within the main category
            subcategories: {
              type: String,
              required: true,
            },
            lastcategories:{
               type:String,
               required:true,
            },
          },
    },
    allowed_emails:{
        type:String,
    }
})


// Export 
module.exports = mongoose.model("Coupon",Coupon);