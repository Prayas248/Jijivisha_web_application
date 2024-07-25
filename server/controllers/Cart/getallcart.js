const User = require("../../models/User");
const jwt = require("jsonwebtoken");

exports.getAllCartUser = async(req,res)=>{
    try{
       
        const {id} = req.params;
        const decode = jwt.verify(id, "prayas");
       
        let finder = decode.id;
        const cart = await User.findById({_id:finder})
            .populate("cart") 
            .exec();

        console.log("Fetched successfully");
        res.send(cart.cart);
        console.log(cart.cart);
        
    }
    catch(error){
        console.log("error", error);
        return res.status(500).json({
            status: 500,
            message: error.message,
        });

    }
}