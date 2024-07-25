const Product = require("../../models/product");
const Blog = require("../../models/Blog");
const Review = require("../../models/review");

exports.getCommentBlogReview = async(req,res)=>{
    try{
        let product = await Blog.find({});
        const comments = product.flatMap(blog =>
            blog.comment.map(comment => ({ ...comment.by, blogId: comment._id, _id: blog._id }))
          );
          
          
        let review = await Review.find({});
        const combinedData = comments.concat(review.length > 0 ? review : []);
        combinedData.sort((a, b) => new Date(b.date) - new Date(a.date));
        console.log("Fetched successfully");
        res.send(combinedData);
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