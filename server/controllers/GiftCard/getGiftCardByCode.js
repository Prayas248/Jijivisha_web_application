

const GiftCard = require("../../models/Giftcard");

exports.getGiftCardByCode = async(req,res)=>{
    try{
        const { code } = req.body;
        let product = await GiftCard.findById({code});
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