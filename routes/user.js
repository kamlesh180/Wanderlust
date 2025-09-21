const express = require("express");
const router = require("./listing");
const app = express.Router();

router.get("/signup", (req,res) => {
    res.send("form");
});
module.exports = router;
