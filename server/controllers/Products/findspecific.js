
const Product = require("../../models/product");

exports.searchProductsByCategory = async (req, res) => {
    try {
      const { maincategory, subcategories,lastcategories,material } = req.params;
  
    
      let query = {};
      if (maincategory) {
        query['category.maincategory'] = maincategory;
      }
      if (subcategories) {
        query['category.subcategories'] = subcategories;
      }
      if (lastcategories) {
        query['category.lastcategories'] = lastcategories;
      }
      if(material){
        query['material']= material;
      }
      const products = await Product.find(query);
  
  
      console.log("Fetched successfully");
      res.send(products);
      console.log(products);
    } catch (error) {
      console.error("error", error);
      return res.status(500).json({
        status: 500,
        message: error.message,
      });
    }
  };
  