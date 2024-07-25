const SizeChart = require("../../models/SizeChart");

exports.updateSize = async (req, res) => {
    try {
        const {id} = req.params;
        const productUpdates = req.body;

        const updatedProduct = await Product.findByIdAndUpdate(
            {
                _id : id,
            },
            
                productUpdates,
                
               {new:true}
            
        )
      if (!updatedProduct) {
        return res.status(404).json({
          status: 404,
          message: "Size Chart not found",
        });
      }
  
      console.log("Size Chart updated successfully");
      return res.status(200).json({
        status: 200,
        message: "Size Chart updated successfully",
        data: updatedProduct,
      });
    } catch (error) {
      console.log("error", error);
      return res.status(500).json({
        status: 500,
        message: error.message,
      });
    }
  };
  