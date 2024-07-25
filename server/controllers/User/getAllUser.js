const User = require("../../models/User");

exports.getAllUser = async(req,res)=>{
    try{
        let product = await User.find({});
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