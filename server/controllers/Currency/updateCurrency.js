const Currency = require("../../models/Currency");

exports.editCurrencyById = async (req, res) => {
    try {
        const { _id } = req.body;
        const body = req.body;

        const updatedProduct = await Currency.findByIdAndUpdate(
            {
                _id : _id,
            },
            
            body,
                
               {new:true}
            
        )
      if (!updatedProduct) {
        return res.status(404).json({
          status: 404,
          message: "Currency not found",
        });
      }
  
      console.log("Currency updated successfully");
      return res.status(200).json({
        status: 200,
        message: "Currency updated successfully",
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
  