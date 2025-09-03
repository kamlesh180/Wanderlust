const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const listingSchema= new Schema({
    title:{
        type:String,
        required:true,
    },
    description:String,
//    image: {
//     type: String,
// //     default: "https://unsplash.com/photos/a-butterfly-rests-on-a-pink-flower-OTAojt0y3-c",
//     set: (v) =>
//         v === "" ? "https://unsplash.com/photos/a-butterfly-rests-on-a-pink-flower-OTAojt0y3-c" : v,
// },
    price:Number,
    location:String,
    country:String,

});
const Listings= mongoose.model("Listing",listingSchema);
module.exports=Listings;