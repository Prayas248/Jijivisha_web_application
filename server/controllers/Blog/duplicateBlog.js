const Blog = require("../../models/Blog");

exports.duplicateBlog = async(req,res)=>{
    try{
        let {id} = req.params;
        const product = await Blog.findById({_id: id});

        const { title, image, author,tags,category } = product;
        const blog = new Blog({
            title,
            image,
            author,
            tags,
            category
        });
        console.log(blog);
        await blog.save();
        console.log("Saved Successfully");
        return res.status(200).json({
            status: 201,
            message: "Blog duplicated successfully",
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