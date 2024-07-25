// import model 
const Product = require("../../models/product");
const Cart = require("../../models/Cart");
const User = require("../../models/User");
const jwt = require("jsonwebtoken");
const Order = require("../../models/Order")


const { response } = require("express");
const generateUniqueID = async () => {
    let uniqueID;
    do {
      // Generate a random 5-digit number
      uniqueID = Math.floor(Math.random() * 100000) + 10000; // Ensures 5 digits
  
      // Check if the ID already exists in the database
      const existingProduct = await Order.findOne({ order_no: uniqueID });
    } while (existingProduct); // Repeat if ID exists
  
    return uniqueID;
  };
  
exports.createOrder = async (req, res) => {
    try {
       
        const { token } = req.body;
        
        const userip = req.ip;
       
       const decode = jwt.verify(token, "prayas");
      
       let finder = decode.id;
       const newcart = await User.findById({_id:finder})
           .populate({
            path: 'cart',
            select: 'product' // Specify fields to populate (only 'product')
        });
        const order = new Order({
            ...req.body,product:newcart.cart,user:finder,user_ip:userip
        })
      
        const savedCart = await order.save();

        
        
        
        
        
        const updatedUserOrder = await User.findByIdAndUpdate(finder, { $push: { order: savedCart._id },latest:new Date() },
            { new: true })
            

        res.json({
            post: updatedUserOrder,
            hogya:savedCart,
        })
    }
    catch (err) {
        return res.status(500).json({
            error : "Error while creating comment",            
        })
    }
}