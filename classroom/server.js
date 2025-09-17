const express = require("express");
const app = express();
const users = require("./routes/user.js");
const posts = require("./routes/post.js");
const cookieParser = require("cookie-parser");

app.use(cookieParser());

app.get("/getcookies", (req,res) => {
    res.cookie("greet", "Namste");
    res.cookie("origin","India");
    res.send("sent you some cookies");
});

app.get("/", (req,res) => {
    console.dir(req.cookies);
    res.send("Hi,I am root");
});

app.use("/users", users);
app.use("/posts", posts);

app.listen (3000, () => {
    console.log("Server is running on port 3000");
});