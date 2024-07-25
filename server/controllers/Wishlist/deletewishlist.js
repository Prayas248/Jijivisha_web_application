const Wishlist = require("../../models/Wishlist");
const User = require("../../models/User");
const jwt = require("jsonwebtoken");

exports.deleteWishlist = async(req,res)=>{
    try{
        const wishlist = await Wishlist.findOneAndDelete({_id:req.params.id});
        const {token} = req.body;
        const decode = jwt.verify(token, "prayas");
       
        let finder = decode.id;
        console.log(finder);
        const updatedUserWishlist = await User.findByIdAndUpdate(finder, { $pull: { wishlist: req.params.id } },
            { new: true })


        console.log("Deleted successfully");
        return res.status(200).json({
            status: 201,
            message: "Product deleted successfully",
            user:updatedUserWishlist,
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