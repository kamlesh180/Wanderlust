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
    default: "https://plus.unsplash.com/premium_photo-1736856134183-d3d3845ce93f?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3DM",
    set: (v) =>
        !v === "" ? "https://plus.unsplash.com/premium_photo-1736856134183-d3d3845ce93f?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" : v,
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