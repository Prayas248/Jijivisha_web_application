const Coupon = require("../../models/Coupon");

exports.getCouponbyCode = async(req,res)=>{
    try{
        let code = req.params.code;
        let query = {};
        query['code'] = code;
        let product = await Coupon.find(query);
        console.log("Fetched successfully");
        res.send(product);
        console.log(product);
        
    }
    catch(error){
        console.log("error", error);
        return res.status(500).json({
            status: 500,
            message: error.message,
        });

    }
}