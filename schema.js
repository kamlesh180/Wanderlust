const Jai = require("joi");
module.exports.listingSchema = Jai.object({
    listing:Jai.object({
        title:Jai.string().required(),
        description: Jai.string().required,
        country:Jai.string().required(),
        location:Jai.string().required(),
        price:Jai.string(),
        image: Jai.string().allow("",null),
    }).required()
});

module.exports.reviewSchema = Jai.object({
    review :Jai.object({
        rating:Jai.number().required().min(1).max(5),
    comment: Jai.string().required(),
    }).required(),

});