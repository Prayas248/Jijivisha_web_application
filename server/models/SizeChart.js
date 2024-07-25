const mongoose = require('mongoose')


// Route Handler 
const SizeChart = new mongoose.Schema({
    image:{
        type:String,
    },
    title: {
        type:String,
    },
    type:{
        type:String,
    },
    product_assigned:{
        type:String,
    },
    description:{
        type:String,
    },
    date:{  
        type:Date,
        default: Date.now,
    }, 
})


// Export 
module.exports = mongoose.model("SizeChart",SizeChart);