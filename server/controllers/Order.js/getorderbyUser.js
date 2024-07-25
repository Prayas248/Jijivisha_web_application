const User = require("../../models/User");
const jwt = require("jsonwebtoken");

exports.getAllOrderUser = async(req,res)=>{
    try{
       
        const {id} = req.params;
        const decode = jwt.verify(id, "prayas");
       
        let finder = decode.id;
        const cart = await User.findById({_id:finder})
            .populate("order") 
            .exec();

        console.log("Fetched successfully");
        res.send(cart.order);
        console.log(cart.order);
        
    }
    catch(error){
        console.log("error", error);
        return res.status(500).json({
            status: 500,
            message: error.message,
        });

    }
}