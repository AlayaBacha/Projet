const mongoose = require("mongoose")

const userSchema = new mongoose.Schema({
    name : {type : String , required : true},
    age : {type : String  , required : true},
    phone : String,
    email : {type : String , unique : true , required : true},
    image : {type : String ,  required : true},
    password : {type : String , required : true},
    role :{type : String}
})

module.exports = mongoose.model("user", userSchema)