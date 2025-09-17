const express = require("express");
const app = express();
const users = require("./routes/user.js");
const posts = require("./routes/post.js");
const session = require("express-session");

app.use (session({secret:"mysupersecretstring",
    resave:false,
    saveUninitialized:true}));

app.get("/reqcount",(req,res) => {
    if (req.session.count) {
        req.session.count++
    } else {
        req.session.count = 1;
    }
    res.send(`You have visited this page ${req.session.count} times`);
});
// app.get("/test",(req,res) => {
//     res.send("test successful!");
// });
// app.use("/users", users);
// app.use("/posts", posts);

app.listen (3000, () => {
    console.log("Server is listeing to  3000");
});