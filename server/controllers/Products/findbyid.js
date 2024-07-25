const Product = require("../../models/product");

exports.getproductsbyID = async(req,res)=>{
    try{
        let {id} = req.params;
        let product = await Product.findById({_id:id});
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