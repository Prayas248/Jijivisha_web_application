
const Currency = require("../../models/Currency");

exports.createCurrency = async(req,res)=>{
    try{
        
        const product = new Currency({
            ...req.body
        });
        console.log(product);
        await product.save();
        console.log("Saved Successfully");
        return res.status(200).json({
            status: 201,
            message: "Currency created successfully",
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