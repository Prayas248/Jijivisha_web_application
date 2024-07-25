const Product = require("../../models/product");

exports.getAllReview = async(req,res)=>{
    try{
        const id = req.params.id;
        const review = await Product.findById({_id:id})
            .populate("reviews") //Populates the comment array with the comments document
            .exec();

        console.log("Fetched successfully");
        res.send(review.reviews);
        console.log(review.reviews);
        
    }
    catch(error){
        console.log("error", error);
        return res.status(500).json({
            status: 500,
            message: error.message,
        });

    }
}