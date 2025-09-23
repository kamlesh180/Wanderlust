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
  type: String,
  default: "https://media.istockphoto.com/id/501155305/photo/ballet-dancer.jpg?s=612x612&w=is&k=20&c=0pY_5QS-0EQ3tAAYu7E4lGslnrWkEKWKEFabmZAPIfY=",
  set: (v) =>
    v === "" ? "https://media.istockphoto.com/id/501155305/photo/ballet-dancer.jpg?s=612x612&w=is&k=20&c=0pY_5QS-0EQ3tAAYu7E4lGslnrWkEKWKEFabmZAPIfY=" : v,
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