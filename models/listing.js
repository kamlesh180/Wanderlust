const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const listingSchema= new Schema({
    title:{
        type:String,
        required:true,
    },
    description:String,
   image: {
    type: String,
    default: "https://unsplash.com/photos/palm-trees-silhouetted-against-a-golden-ocean-sunset-l4i5j3NU1M0",
    set: (v) =>
        v === "" ? "https://unsplash.com/photos/silhouette-of-person-holding-staff-against-sunset-over-ocean-sXe-WIguxA0" : v,
},
    price:Number,
    location:String,
    country:String,

});
const Listings= mongoose.model("Listing",listingSchema);
module.exports=Listings;