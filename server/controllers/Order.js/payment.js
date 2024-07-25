const Razorpay = require("razorpay");
const crypto = require("crypto");
const Product = require("../../models/product");
const Cart = require("../../models/Cart");
const User = require("../../models/User");
const jwt = require("jsonwebtoken");
const Order = require("../../models/Order")



exports.payment = async(req,res) =>{
    try{
        const instance = new Razorpay({
            key_id:process.env.KEY_ID,
            key_secret:process.env.KEY_SECRET,
        });
        const options = {
            amount:req.body.amount * 100,
            currency:"INR",
            receipt:crypto.randomBytes(10).toString("hex"),
        };
        instance.orders.create(options,(error,order)=>{
            if(error){
                console.log(error);
                return res.status(500).json({message:"Something Went Wrong!"});
            }
            res.status(200).json({data:order});
        })
    }
    catch(error){
        console.log(error);
        res.status(500).json({message:"Internal Server Error!"});
    }
}

exports.verify = async(req,res) =>{
    try{
        const{
            razorpay_order_id,
            razorpay_payment_id,
            razorpay_signature
        } = req.body.paymentResponse;
        const sign = razorpay_order_id + "|" + razorpay_payment_id;
        const expectedSign = crypto
        .createHmac("sha256",process.env.KEY_SECRET)
        .update(sign.toString)
        .digest("hex");

        if(razorpay_signature === expectedSign){
            try{const { token } = req.body;
        
            const userip = req.ip;
           
           const decode = jwt.verify(token, "prayas");
          
           let finder = decode.id;
           const newcart = await User.findById({_id:finder})
               .populate({
                path: 'cart',
                select: 'product' // Specify fields to populate (only 'product')
            });
            const order = new Order({
                ...req.body.formData,...req.body.paymentResponse,product:newcart.cart,user:finder,user_ip:userip
            })
          
            const savedCart = await order.save();
            const updatedUserOrder = await User.findByIdAndUpdate(finder, { $push: { order: savedCart._id },latest:new Date() },
                { new: true })
                
            return res.status(200).json({message:"Payment Verified"});
        }
        catch(error){
            return res.status(400).json({message:"Something Went Wrong!"});
        }
        }
        else{
            return res.status(400).json({message:"Invalid signature sent!"});
        }

    }
    catch(error){
        console.log(error);
        res.status(500).json({message:"Internal Server Error!"});

    }
}