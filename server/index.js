const port=4000;
const express= require('express');
const app = express();
const jwt= require('jsonwebtoken');
const path= require('path');
const cors = require('cors');
const dbConnect= require('./config/database');
const createroute = require('./routes/Product');
const imager = require('./controllers/Images/image');
const dotenv = require("dotenv");

dotenv.config();

app.use(express.json());
app.use(cors());

//Database connection with MongoDB
dbConnect();


app.use("/",createroute);
app.use("/",imager);

app.listen(port,(error)=>{
    if(!error){
        console.log("Server is running at port--"+port);
    }
    else{
        console.log("Error is---"+error);
    }
})