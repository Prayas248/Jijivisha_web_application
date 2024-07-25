const Cart = require("../../models/Cart");
const User = require("../../models/User");
const jwt = require("jsonwebtoken");

exports.deleteCart = async(req,res)=>{
    try{
        const cart = await Cart.findOneAndDelete({_id:req.params.id});
        const {token} = req.body;
        const decode = jwt.verify(token, "prayas");
       
        let finder = decode.id;
        console.log(finder);
        const updatedUserCart = await User.findByIdAndUpdate(finder, { $pull: { cart: req.params.id } },
            { new: true })


        console.log("Deleted successfully");
        return res.status(200).json({
            status: 201,
            message: "Product deleted successfully",
            user:updatedUserCart,
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