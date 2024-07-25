const mongoose = require('mongoose')


// Route Handler 
const Page = new mongoose.Schema({
    author:{
        type:String,
    },
    title: {
        type:String,
    },
    date:{
        type:Date,
        default: Date.now,
    }, 
})


// Export 
module.exports = mongoose.model("Page",Page);