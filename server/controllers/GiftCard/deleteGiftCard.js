
const GiftCard = require("../../models/Giftcard")

exports.deleteGiftCard = async(req,res)=>{
    try{const { _id } = req.body;
        const { acknowledged } = await GiftCard.deleteOne({ _id });

    console.log("GiftCard deleted successfully");
    return res.status(200).json({
      status: 200,
      message: "GiftCard deleted successfully",
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