const express = require("express");
const router = express.Router();

//index
router.get("/",(req,res) => {
    res.send("Get for users");
});

//show
router.get("/:id",(req,res) => {
    res.send("Get for user id");
});

//post
router.post("/",(req,res) => {
    res.send("Post for users");
});

//Delete
router.delete("/:id", (req,res) => {
    res.send("Delete for user id");
});

module.exports = router;