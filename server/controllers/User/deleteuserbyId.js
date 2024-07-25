const User = require("../../models/User");
const Cart = require("../../models/Cart")
const Wishlist = require("../../models/Wishlist")
const Order = require("../../models/Order");
const Review = require("../../models/review");

exports.deleteUser = async(req,res)=>{
    try{
        await User.findOneAndDelete({_id:req.body._id});
        
        await Cart.deleteMany({ user: req.body._id }); // Delete carts with matching product ID
        await Wishlist.deleteMany({user:req.body._id})
        await Order.deleteMany({user:req.body._id})
        await Review.deleteMany({user:req.body._id})
        console.log("Deleted successfully");
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