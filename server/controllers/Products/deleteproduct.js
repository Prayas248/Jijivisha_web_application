const Product = require("../../models/product");
const Cart = require("../../models/Cart")
const Wishlist = require("../../models/Wishlist")

exports.deleteProduct = async(req,res)=>{
    try{
        await Product.findOneAndDelete({_id:req.body._id});
        console.log("Deleted successfully");
        await Cart.deleteMany({ product: req.body._id }); // Delete carts with matching product ID
        await Wishlist.deleteMany({product:req.body._id})

    console.log("Product and cart items deleted successfully");
    return res.status(200).json({
      status: 200,
      message: "Product and associated cart items and wishlist deleted successfully",
    });
    }   
    catch(error){
        console.log("error", error);
        return res.status(500).json({
            status: 500,
            message: error.message,
        });

    }
}