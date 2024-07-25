const mongoose = require('mongoose')


// Route Handler 
const Image = new mongoose.Schema({
    image:{
        type:String,
    },
    name: {
        type:String,
    },
    size:{
        type:String,
        ref : "User"
    },
    date:{
        type:Date,
        default: Date.now,
    }, 
})


// Export 
module.exports = mongoose.model("Image",Image);