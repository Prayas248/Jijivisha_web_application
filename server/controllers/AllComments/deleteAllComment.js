
const Blog = require("../../models/Blog")
const Review = require("../../models/review")

exports.deleteAllComment = async(req,res)=>{
    try{const { _id } = req.body;
        if(req.body.blogId){
       
              const updatedBlog = await Blog.findOneAndUpdate(
                { _id: _id, "comment._id":req.body.blogId }, // Target Blog and comment by ID
                { $pull: { comment: { _id: req.body.blogId } } }, // Remove matching comment using $pull
                { new: true } // Return the updated document
              );
        
    }
        else{
            const { review } = await Review.deleteOne({ _id });
            
        }

    console.log("Comment/Review deleted successfully");
    return res.status(200).json({
      status: 200,
      message: "Comment/Review deleted successfully",
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