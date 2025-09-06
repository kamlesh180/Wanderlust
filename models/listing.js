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
    default: "https://media.istockphoto.com/id/1127245421/photo/woman-hands-praying-for-blessing-from-god-on-sunset-background.webp?a=1&b=1&s=612x612&w=0&k=20&c=Fbysb-YHuALb_Jyi4Q8Lw2QEVIFa3WSaPsvneGr7Q_8=",
    set: (v) =>
        v === "" ? "https://media.istockphoto.com/id/1127245421/photo/woman-hands-praying-for-blessing-from-god-on-sunset-background.webp?a=1&b=1&s=612x612&w=0&k=20&c=Fbysb-YHuALb_Jyi4Q8Lw2QEVIFa3WSaPsvneGr7Q_8=" : v,
},
    price:Number,
    location:String,
    country:String,

});
const Listings= mongoose.model("Listing",listingSchema);
module.exports=Listings;