
const User = require("../../models/User");

const Order = require("../../models/Order");

exports.deleteOrder = async(req,res)=>{
    try{
        const order = await Order.findById({_id:req.params.id});
        const userid = order.user;
        const okji = await Order.findOneAndDelete({_id:req.params.id});
        const updatedUserCart = await User.findByIdAndUpdate(userid, { $pull: { order: req.params.id } },
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