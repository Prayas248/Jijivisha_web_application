const Product = require("../../models/product");

exports.getCollection = async(req,res)=>{
    try{let query = {};
        query['category.subcategories'] = req.params.id;
        let product = await Product.find(query);
        const reversedProducts = product.reverse();
        console.log("Fetched successfully");
        res.send(reversedProducts);
        console.log(reversedProducts);
        
    }
    catch(error){
        console.log("error", error);
        return res.status(500).json({
            status: 500,
            message: error.message,
        });

    }
}

exports.getCollectionSub = async(req,res)=>{
    try{let query = {};
        query['category.lastcategories'] = req.params.id;
        let product = await Product.find(query);
        let newcollection = product.slice(1).slice(-4);
        console.log("Fetched successfully");
        res.send(newcollection);
        console.log(newcollection);
        
    }
    catch(error){
        console.log("error", error);
        return res.status(500).json({
            status: 500,
            message: error.message,
        });

    }
}
