const Blog = require("../../models/Blog");

exports.getAllCommentforBlog = async(req,res)=>{
    try{
        let {id} = req.params;
        let product = await Blog.findById({_id:id}).populate("comment").exec();
        console.log("Fetched successfully");
        res.send(product.comment);
        console.log(product.comment);
        
    }
    catch(error){
        console.log("error", error);
        return res.status(500).json({
            status: 500,
            message: error.message,
        });

    }
}