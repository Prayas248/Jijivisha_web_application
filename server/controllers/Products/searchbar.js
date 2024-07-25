const Product = require("../../models/product");

exports.searchProducts = async (req, res) => {
    try {
      const searchTerm  = req.params.id; // Assuming search term comes from query parameter
  
      if (!searchTerm) {
        return res.status(400).json({
          status: 400,
          message: "Please provide a search term",
        });
      }
  
      // Case-insensitive search (optional)
      const searchRegex = new RegExp(searchTerm, 'i'); // 'i' flag for case-insensitive
  
      const products = await Product.find({
        name: searchRegex, // Use the search regex for name matching
      });
  
      if (products.length === 0) {
        return res.status(200).json({
          status: 200,
          message: "No products found matching the search term",
          data: [],
        });
      }
  
      res.status(200).json({
        status: 200,
        message: "Products found successfully",
        data: products,
      });
    } catch (error) {
      console.error("Error searching products:", error);
      return res.status(500).json({
        status: 500,
        message: "Internal server error",
      });
    }
  };
  