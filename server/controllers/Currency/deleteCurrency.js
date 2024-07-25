
const Currency = require("../../models/Currency")

exports.deleteCurrency = async(req,res)=>{
    try{const { _id } = req.body;
        const { acknowledged } = await Currency.deleteOne({ _id });

    console.log("Currency deleted successfully");
    return res.status(200).json({
      status: 200,
      message: "Currency deleted successfully",
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