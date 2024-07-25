// import model 
const Product = require("../../models/product");
const Review = require("../../models/review");
const { response } = require("express");
const jwt = require("jsonwebtoken")

exports.createComment = async (req, res) => {
    try {
        const userip = req.ip;
        const { product, user_name, body,rating,user_email,token } = req.body;
        const decode = jwt.verify(token, "prayas");
      
        let finder = decode.id;
        let bloger = await Product.findById({_id:product});
        const review = new Review({
            product, user_name, body,rating,user_email,user:finder,user_ip:userip,product_name:bloger.name
        })

        
        const savedComment = await review.save();

        
        const updatedProduct = await Product.findByIdAndUpdate(product, { $push: { reviews: savedComment._id } },
            { new: true })
            .populate("reviews") //Populates the comment array with the comments document
            .exec();

        res.json({
            post: updatedProduct,
        })
    }
    catch (err) {
        return res.status(500).json({
            error : "Error while creating comment",            
        })
    }
}