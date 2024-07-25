
const Giftcard = require("../../models/Giftcard");
const mongoose = require("mongoose")

exports.createGiftCard = async(req,res)=>{
    try{
        
        const product = new Giftcard({
            id: new mongoose.Types.ObjectId(),
            ...req.body
        });
        console.log(product);
        await product.save();
        console.log("Saved Successfully");
        return res.status(200).json({
            status: 201,
            message: "Gift Card created successfully",
            data: product,
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