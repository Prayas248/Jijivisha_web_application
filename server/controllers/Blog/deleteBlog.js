const Blog = require("../../models/Blog");

exports.deleteBlog = async(req,res)=>{
    try{
        
        const blog = await Blog.findOneAndDelete({_id:req.params.id});


        console.log("Deleted successfully");
        return res.status(200).json({
            status: 201,
            message: "Product deleted successfully",
            user:blog,
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