const SizeChart = require("../../models/SizeChart");

exports.createSize = async(req,res)=>{
    try{
        const product = new SizeChart({
            ...req.body
        });
        console.log(product);
        await product.save();
        console.log("Saved Successfully");
        return res.status(200).json({
            status: 201,
            message: "Size Chart created successfully",
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