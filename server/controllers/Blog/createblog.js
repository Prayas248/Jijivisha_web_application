const Blog = require("../../models/Blog");

exports.createBlog = async(req,res)=>{
    try{
        const blog = new Blog({
            ...req.body
        });
        console.log(blog);
        await blog.save();
        console.log("Saved Successfully");
        return res.status(200).json({
            status: 201,
            message: "Blog created successfully",
            data: blog,
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