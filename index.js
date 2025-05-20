const mongoose = require("mongoose");
const initData = require("./data");
const Listing = require ("../models/listing");

 const MONGO_URL=  "mongodb://127.0.0.1:27017/WanderHome";
  main()
    .then(() => {
        console.log("✅ MongoDB Connected Successfully!");
    })
    .catch(err => {
        console.error("❌ MongoDB Connection Error:", err)});

    async function main(){
    await mongoose.connect(MONGO_URL);
  }

  const initDB = async ()=>{
    await Listing.deleteMany({});
    initData.data = initData.data.map((obj)=> ({...obj, owner: "68290df18d5a865d6aa7b8e9"}));
   
    await Listing.insertMany(initData.data);
    console.log("data was initialized");
  };
  initDB();