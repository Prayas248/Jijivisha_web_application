const Product = require("../../models/product");

exports.createProduct = async(req,res)=>{
    try{
        const product = new Product({
            ...req.body
        });
        console.log(product);
        await product.save();
        console.log("Saved Successfully");
        return res.status(200).json({
            status: 201,
            message: "Product created successfully",
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