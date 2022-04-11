const mongoose = require('mongoose');

const news = mongoose.Schema({
    title:{
        type:String
    },
    text:{
        type:String
    },
    img:{
        type:String
    },
    sana:{
        type:String
    },
    delay:{
        type:String
    },
    time:{
        type:String
    },
    category:{
        type:String
    },
    video:{
        type:String
    }
})


module.exports = User = mongoose.model("news",news)