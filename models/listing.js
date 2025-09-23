const mongoose = require("mongoose");
const review = require("./review");
const Schema = mongoose.Schema;
const Review = require ("./review.js");
const { types } = require("joi");

const listingSchema= new Schema({
    title:{
        type:String,
        required:true,
    },
    description:String,
   image: {
   type:String,
    default: "https://unsplash.com/photos/silhouette-of-a-hand-reaching-out-towards-light-D_BI7HXtd3M",
    set: (v) =>
        v === "" ? "https://unsplash.com/photos/silhouette-of-a-hand-reaching-out-towards-light-D_BI7HXtd3M" : v,
},
    price:Number,
    location:String,
    country:String,
    reviews: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref:"Review"
        },
    ],
    owner: {
        type:Schema.Types.ObjectId,
        ref:"User",
    }, 
    
});
listingSchema.post("findOneAndDelete", async(listing) => {
    if(listing){
        await Review.deleteMany({
            _id: {
                $in: listing.reviews}})
    }
});
const Listings= mongoose.model("Listing",listingSchema);
module.exports=Listings;