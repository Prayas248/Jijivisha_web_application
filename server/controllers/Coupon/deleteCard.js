
const Coupon = require("../../models/Coupon")

exports.deleteCoupon = async(req,res)=>{
    try{const { _id } = req.body;
        const { acknowledged } = await Coupon.deleteOne({ _id });

    console.log("Coupon deleted successfully");
    return res.status(200).json({
      status: 200,
      message: "Coupon deleted successfully",
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