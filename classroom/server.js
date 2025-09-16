const express = require("express");
const app = express();
const users = require("./routes/user.js");

app.get("/", (req,res) => {
    res.send("Hi,I am root");
});

app.use("/api", users);

//Posts
//Index
app.get("/posts", (req,res) =>
{
    res.send("Get for posts");
});
//show 
app.get("/posts/:id",(req,res) => {
    res.send("Get for post id");
});
//post
app.post("/posts", (req,res) => {
    res.send("Post for posts");
})


