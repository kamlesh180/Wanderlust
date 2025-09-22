module.exports.isLoggedIn = (req,res,next) => {
    // console.log(req.user); //for check we are login or not
    if(!req.isAuthenticated()) {
        req.flash("error","You must be looged in to create listing!");
         return res.redirect("/login");
    }
    next();
    
}