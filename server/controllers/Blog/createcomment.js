const Blog = require("../../models/Blog");
const jwt = require("jsonwebtoken")
const mongoose = require("mongoose")

exports.createBlogComment = async(req,res)=>{
    try{ 
        let {id} = req.params;
        const userip = req.ip;
        const token = req.body.by.token;
        const decode = jwt.verify(token, "prayas");
        let bloger = await Blog.findById({_id:id});
        let finder = decode.id;
        const productUpdates = req.body;
        productUpdates.by.userid=finder;
        productUpdates.by.blog=id;
        productUpdates.by.user_ip = userip;
        productUpdates.by.blog_name = bloger.title
        productUpdates.by.id = new mongoose.Types.ObjectId()
        const updatedUserCart = await Blog.findByIdAndUpdate({_id:id}, { $push: { comment: productUpdates } },
            { new: true })
            
        console.log(updatedUserCart);
        
        console.log("Saved Successfully");
        return res.status(200).json({
            status: 201,
            message: "Comment created successfully",
            data: updatedUserCart,
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