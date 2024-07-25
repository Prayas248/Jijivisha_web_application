const Coupon = require("../../models/Coupon");
const uuid = require("uuid");

exports.createCoupon = async(req,res)=>{
    try{    const codeid= uuid.v4();

        const coupon = new Coupon({
            code:codeid.substring(0,10),
            ...req.body
        });
        console.log(coupon);
        await coupon.save();
        console.log("Saved Successfully");
        return res.status(200).json({
            status: 201,
            message: "Product created successfully",
            data: coupon,
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