const User = require("../Models/User")
const bcrypt = require('bcrypt');
var jwt = require('jsonwebtoken');


exports.SingUp = async(req,res)=>{
    try {
        const {name,age,email,password,image} = req.body
        
        const found = await User.findOne({email})
        
        if(found){
            return res.status(400).send({errors : [{msg : "Email already exists"}]})
        }

        const newUser = new User({...req.body,role : "client"})
        
        const saltRounds = 10
        const salt = bcrypt.genSaltSync(saltRounds);
        const hashPassword = bcrypt.hashSync(password, salt);
        
        newUser.password = hashPassword

        await newUser.save()

        const payload = { id: newUser._id }
        var token = jwt.sign(payload,process.env.privatekey);

        res.status(200).send({msg: "User Added", newUser,token})
    } catch (error) {
     res.status(500).send({errors : [{msg : "Could Not SignUp"}]})
    }
}

exports.singIn = async(req,res)=>{
    try {
        const {email,password} = req.body
        const found = await User.findOne({email}) 

        if(!found){
           return res.status(400).send({errors : [{msg : "Email Or Passwored Invalid"}]})
        }
        const matched = bcrypt.compareSync(password, found.password)

        if(!matched){
           return res.status(400).send({errors : [{msg : "Email Or Passwored Invalid"}]})
        }
        const payload = { id: found._id }
        var token = jwt.sign(payload,process.env.privatekey);
        res.status(200).send({msg : "Singn IN",found,token})
    } catch (error) {
        res.status(500).send({errors : [{msg : "Could Not SignIn"}]})
    }
}

exports.GetAllUsers = async(req,res)=>{
    try {
       const users = await User.find()
       res.status(200).send({msg : "List of users",users})
    } catch (error) {
        res.status(500).send({errors : [{msg : "Could not get all users"}]})
    }
}

exports.GetOneUser = async (req,res)=>{
    const {id} = req.params
    try {
        const oneUser = await User.findById(id)
        res.status(200).send({ msg: 'user : ', oneUser })
    } catch (error) {
        res.status(500).send({ msg: 'Can not get User' })
    }
}

exports.DeleteUser = async (req,res) => {
    const {id} = req.params
    try {
        await User.findByIdAndDelete(id)
        res.status(200).send({ msg: 'Contact deleted' });
    } catch (error) {
        res.status(500).send({ msg: "Could not delete contact" })
    }
}

exports.UpdateUser = async(req,res)=>{
    try {
     const {id} =req.params
     await User.findByIdAndUpdate(id,{$set : req.body })
      res.status(200).send({msg : "User Updated"})
    } catch (error) {
     res.status(500).send({ msg: "Could not update user" })
    }
 }