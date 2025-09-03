const express = require("express");
const app = express();
const mongoose = require("mongoose");
const Listing = require("./models/listing.js");
// const path = require("path");
// const methodOverride = require("method-override");

const MONGO_URL ="mongodb://127.0.0.1:27017/wanderlust";

main()
.then (()=> {
    console.log("connected to DB");
})
.catch((err) => {
    console.log(err)
    
});
async function main(){
    await mongoose.connect(MONGO_URL);

}
app.get("/",(req,res) =>{
    res.send("Hi, I am root");
});
app.get("/testListing",async(req,res)=> {
    try{
    let sampleListing =new Listing({
        title:"My New Villa ",
        description:"By the beach",
        price:1200,
        location:"Calangute,Goa",
        country:"India"
    });
    await sampleListing.save();
    console.log("sample was saved");
    res.send("successful testing");
    } catch (err) {
        console.log(err);
        res.status(400).send(err.message);
    }
});
app.listen(8080,()=> {
    console.log("server is listeing to port 8080");
});