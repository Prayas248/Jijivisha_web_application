const Blog = require("../../models/Blog");
const Review = require("../../models/review");

exports.searchComment = async (req, res) => {
    try {
      const searchTerm  = req.params.id; // Assuming search term comes from query parameter
  
      if (!searchTerm) {
        return res.status(400).json({
          status: 400,
          message: "Please provide a search term",
        });
      }
  
      // Case-insensitive search (optional)
      ; // 'i' flag for case-insensitive
      let product = await Blog.find({});
        const comments = product.flatMap(blog => blog.comment.map(comment => comment.by));
        let review = await Review.find({});
        const combinedData = comments.concat(review.length > 0 ? review : []);
        combinedData.sort((a, b) => new Date(b.date) - new Date(a.date));
        const searchRegex = new RegExp(searchTerm, 'i')
        const filterdata = combinedData.filter(item => {
            // Search across relevant properties based on the data structure
            const searchFields = ['user_name', 'name']; // Adjust based on your data structure
            return searchFields.some(field => item[field] && searchRegex.test(item[field])); // Check if any field matches
          });
       res.send(filterdata);
      
  
    
    } catch (error) {
      console.error("Error searching products:", error);
      return res.status(500).json({
        status: 500,
        message: "Internal server error",
      });
    }
  };
  