const mongoose = require("mongoose")

const newschema = new mongoose.Schema({
    bookname:{
        type:String,
    },
    authorname:{
        type:String
    },
    category:{
        type:String,
    },
    isbn:{
        type:Number,
    },
    price:{
        type:String
    },
    quantity:{
        type: Number,
    },
    issued:[
        {
          bookname: {
            type: String,
          },
          isbnn:{
            type:Number,
          },
          regno:{
            type:String,
          }

         
        }
    ],
   
 
})

const collection = mongoose.model("books",newschema)
module.exports = collection
