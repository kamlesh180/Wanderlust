const cloudinary=require("cloudinary").v2;
const { cloudinaryStorage } = require("multer-storage-cloudinary");
cloudinary.config({
    cloud_name: process.env.CLOUDE_NAME,
    api_key: process.env.CLOUDE_API_KEY,
    api_secret:process.env.CLOUDE_API_SECRET
}); 
const storage= new cloudinaryStorage({
    cloudinary:cloudinary,
    params:{
        folder:"wanderlust-DEV",
        allowedFormats: ["png","jpg","jpeg"],
    },
});

module.exports= {
    cloudinary,
    storage,
};