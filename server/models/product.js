const mongoose= require('mongoose');

//for women


const Product = new mongoose.Schema({
    id:{
        type:Number,
    },
    name:{
        type:String,
   },
   image:{
        type:[String],
   },
   category: {
     type: {
       // Main category (e.g., Men, Women, Kids)
       maincategory: {
         type: String,
       },
       // Subcategories within the main category
       subcategories: {
         type: String,
       },
       lastcategories:{
          type:String,
       },
     },
   },
   new_price:{
        type:Number,
   },
   old_price:{
        type:Number,
   },
   popular:{
     type:Boolean,
     default:false,
   },
   new_collection:{
     type:Boolean,
     default:false,
   },
   material:{
        type:String,
   },
   available:{
        type:String,
   },
   product_details:{
        type:String,
   },
   quantity:{
        type:Number,
        
   },
   sku_code:{
     type:String,
   },
   stock_management:{
     type:Boolean,
     default:false,
   },
   sold_individually:{
     type:Boolean,
     default:false,
   },
   weight:{
     type:Number,
   },
   attributes:[{
     title:{
          type:String,
     },
     value:{
          type:String,
     },
     isVisible:{
          type:Boolean,
          default:false,
     }
   }],
   frequently_bought:{
      products_selected:[{
          id:{
               type:String,
          },
          name:{
               type:String,
          }
     }],
      discount:{
          type:Number,
      },
      ischecked_all:{
          type:Boolean,
      },
      number_of_discount:{
          type:Number
      }
    },
    upsells:{
     type:String,
    },
    cross_sells:{
     type:String,
    },
   dimensions:{
     length:{
          type:Number,
     },
     width:{
          type:Number,
     },
     height:{
          type:Number,
     }
   },
   shipping_class:{
     type:String,
   },
   stock_status:{
     type:String,
   },
   material_care:{
        type:String,
   },
   shipping:{
          type:String,
          
   },
   sale_quantity:{
          type:Number,
          default:0,
   },
   sold_items:{
          type:Number,
          default:0,
   },
   sale_date_from:{
          type:Date,
   },
   sale_date_end:{
          type:Date,
   },
   date:{
        type:Date,
        default: Date.now,
   },
   reviews : [{
    type : mongoose.Schema.Types.ObjectId,
    ref : "Review",
    }],
});

module.exports = mongoose.model("Product", Product);