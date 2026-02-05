const mongoose = require("mongoose");
const initData = require("./data.js");   // added ./
const Listing = require("../models/listing.js");

const MONGO_URL = "mongodb://127.0.0.1:27017/hikehide_new";

main()
    .then(() =>{         // added async
    console.log("connected to DB");
    // await initDB();
    // await mongoose.connection.close(); // added connection close line
  
})
    .catch((err) => {
      console.log(err);
})
async function main(){
    await mongoose.connect(MONGO_URL);
    // console.log("Connection is established");
}


const initDB = async () => {
    await Listing.deleteMany({});
    initData.data = initData.data.map((obj => ({
        ...obj, 
        owner: "696b8c2968f032799aa1e434"})));
    await Listing.insertMany(initData.data);
    console.log("data was initialized");
    
};

initDB();