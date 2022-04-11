const mongoose = require('mongoose');
const db = "mongodb+srv://dostonbekabdumuxtorov:heKu12OZTKEo4GR6@cluster0.120eg.mongodb.net/PressClub?retryWrites=true&w=majority"

const connectDB = async () => {
    try{
        await mongoose.connect(db,{
            useNewUrlParser:true, 
        });
        console.log("MongoDb connected >>> ...");
    }catch(err){
        console.error("Dostonbek Please check some Settings in database",err.message);
    }
}

module.exports = connectDB;