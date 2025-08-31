const mongoose = require("mongoose");
const data = require("./data.js");
const Listing = require("./models/listing.js");


const MONGO_URL ="mongodb://127.0.0.1:27017/wanderlust";
main()
.then (()=> {
    console.log("connected to DB");
})
.catch((err) => {
    console(err)
    
});
async function main(){
    await mongoose.connect(MONGO_URL)

}
const initDB = async() => {
    await Listing.deleteMany({});
    await Listing.insertMany(initDB,data);
    console.log("data was initilized");
};
initDB();