const mongoose = require("mongoose")

const PostSchema = new mongoose.Schema({
    title : {type : String , required : true},
    description : {type : String  , required : true},
    adresse : {type : String  , required : true},
    // localisation : {type : String  , required : true},
    image : {type : String ,  required : true},
    owner : {type : mongoose.Types.ObjectId, ref : "user"},
    valid : {type : Boolean},
    date : String
    
})

module.exports = mongoose.model("Posts", PostSchema) 
