const express = require("express");
const app = express();
const mongoose = require("mongoose");
const path = require("path");
const methodOverride = require("method-override");
const ejsMate = require("ejs-mate");
const ExpressError = require("./utils/ExpressError.js");

const listing = require ("./routes/listing.js");
const reviews = require("./routes/review.js");
const Listings = require("./models/listing.js");
const session = require("express-session");
 
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

const sessionOptions = {
    secret:"mysupersecretcode",
    resave:false,
    saveUninitialized:true,
    cookie:{
        expires: Date.now() + 7*24*60*60*1000,
        maxAge: 7*24*60*60*1000,
        httpOnly:true, 

    },

};
app.use(session(sessionOptions));

app.get("/",(req,res) =>{
    res.send("Hi, I am root");
});


app.use("/listings", listing);
app.use("/listings/:id/reviews",reviews);


//Middleware error handling
app.all('/*splat', (req, res, next) => {
  next(new ExpressError(404, "Page not found"));
});


app.use((err,req,res,next) => {
    let { statusCode=500, message="Something went wrong" } = err;
    res.status(statusCode).render("error.ejs",{err});
    // res.status(statusCode).send(message);
  });

app.listen(8080,()=> {
    console.log("server is listeing to port 8080");
});