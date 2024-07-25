const mongoose = require('mongoose')


// Route Handler 
const Blog = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    image: {
        type: String,
    },
    author: {
        type: String,
        required: true,
    },
    tags: {
        type: [String],
        required: true,
    },
    category: {
        type: String,
        required: true,
    },
    comment: [{
        by: {
            userid: {
                type: mongoose.Schema.Types.ObjectId,
                ref: "User"
            },
            name: {
                type: String,
            },
            body: {
                type: String,
            },
            blog:{
                type: mongoose.Schema.Types.ObjectId,
                ref: "Blog"
            },
            user_ip:{
                type:String,
            },
            blog_name:{
                type:String,
            },
            email:{
                type:String,
            },
            date: {
                type: Date,
                default: Date.now,
            },
            id:{
                type:String,
            }
        },
        reply: [{
            userid: {
                type: mongoose.Schema.Types.ObjectId,
                ref: "User"
            },
            name: {
                type: String,
            },
            body: {
                type: String,
            },
            date: {
                type: Date,
                default: Date.now,
            },
        }],

    }],
    date: {
        type: Date,
        default: Date.now,
    },
})


// Export 
module.exports = mongoose.model("Blog", Blog);