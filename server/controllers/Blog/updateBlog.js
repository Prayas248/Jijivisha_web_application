const Blog = require("../../models/Blog");

exports.updateBlog = async (req, res) => {
    try {
        const {id} = req.params;
        const productUpdates = req.body;

        const updatedBlog = await Blog.findByIdAndUpdate(
            {
                _id : id,
            },
            
                productUpdates,
                
               {new:true}
            
        )
      if (!updatedBlog) {
        return res.status(404).json({
          status: 404,
          message: "Product not found",
        });
      }
  
      console.log("Blog updated successfully");
      return res.status(200).json({
        status: 200,
        message: "Blog updated successfully",
        data: updatedBlog,
      });
    } catch (error) {
      console.log("error", error);
      return res.status(500).json({
        status: 500,
        message: error.message,
      });
    }
  };
  