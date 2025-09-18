const express = require("express");
const app = express();
const users = require("./routes/user.js");
const posts = require("./routes/post.js");
const session = require("express-session");

const sessionOptions = {
    secret:"mysupersecretstring",
    resave:false,
    saveUninitialized:true,
};
app.use(session(sessionOptions));

app.get("/register",(req,res) => {
    let {name = "Guest"} =req.query;
    req.session.name = name;
    res.redirect("/hello");
});

app.get("/hello",(req,res) => {
    res.send(`hello ${req.session.name}`);
})
app.listen (3000, () => {
    console.log("Server is listeing to  3000");
});