const express = require('express');
const router = express.Router();
const upload = require("../../middlewares/multer");
const cloudinary = require('./cloudinary');
const Image = require("../../models/Image");

router.post("/upload", upload.single('image'),async function (req, res) {
    try {
        const uploadimage = await cloudinary.uploader.upload(req.file.path);

        const imageSize = req.file.size;
        
        const newImage = new Image({
            image: uploadimage.secure_url,
            size: imageSize
        });
        await newImage.save();
        res.status(200).json({
            success: true,
            data: newImage
        });
    }
    catch (err) {
        console.error(err);
        res.status(500).json({
            success: false,
            message: 'Error uploading or saving image'
        });
    }


})
module.exports = router;
