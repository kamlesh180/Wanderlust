const express = require("express");
const app = express();
const mongoose = require("mongoose");
const Listing = require("./models/listing.js");
const path = require("path");
const methodOverride = require("method-override");
const ejsMate = require("ejs-mate");
const wrapAsync = require("./utils/wrapAsync.js");
const ExpressError = require("./utils/ExpressError.js");
const {listingSchema} = require("./schema.js");
 
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
app.set ("view engine","ejs");
app.set("views", path.join(__dirname,"views"));
app.use(express.urlencoded({extended:true}));
app.use (methodOverride ("_method"));
app.engine("ejs", ejsMate);
app.use(express.static(path.join(__dirname,"/public")));

app.get("/",(req,res) =>{
    res.send("Hi, I am root");
});
//index route
app.get("/listings", wrapAsync(async (req,res) => {
    const allListings = await Listing.find({});
      res.render("./listings/index.ejs", {allListings});
    })
);

//new route 
app.get("/listings/new",(req,res) =>{
    res.render("listings/new.ejs");
});

//show route
app.get ("/listings/:id" ,wrapAsync(async (req,res) => {
    let {id}=req.params;
    const listing = await Listing.findById(id);
    res.render("listings/show.ejs",{listing});
})
);

// create route
app.post("/listings", 
    wrapAsync(async(req,res,next) => {
    let reslut = listingSchema.validate(req.body);
    console.log(reslut);
if (error){
// let errMsg = error.details.map(el) => el.message).join(",");
throw new ExpressError(400,reslut.error)
}
    const newListing = new Listing(req.body.listing);
    await newListing.save();
    res.redirect("/listings");
})
);

//edit route
app.get("/listings/:id/edit", wrapAsync(async (req,res) => {
    let {id} = req.params;
    const listing = await Listing.findById(id);
    res.render("listings/edit.ejs" ,{listing});
})
);
//Update Route
app.put("/listings/:id",wrapAsync(async (req,res) => {
     if(!req.body.listing){
    throw new ExpressError(404, "Send valid data for listing");
 }
    let {id} = req.params;
    await Listing.findByIdAndUpdate(id,{...req.body.listing});
    res.redirect(`/listings/${id}`);
})
);
//Delete Route
app.delete("/listings/:id",wrapAsync(async(req,res) => {
    let {id} = req.params;
    let deleteListing =await Listing.findByIdAndDelete(id);
    console.log(deleteListing);
    res.redirect("/listings");
})
);


//Middleware error handling
app.all('/*splat', (req, res, next) => {
  next(new ExpressError(404, "Page not found"));
});


app.use((err,req,res,next) => {
    let { statusCode=500, message="Something went wrong" } = err;
    res.status(statusCode).render("error.ejs",{message});
        // res.status(statusCode).send(message);
  });

app.listen(8080,()=> {
    console.log("server is listeing to port 8080");
});