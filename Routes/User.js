const express = require("express")

const { SingUp, singIn, DeleteUser, GetAllUsers, GetOneUser, UpdateUser } = require("../Controllers/Users");
const { SignUpValidator, validation } = require("../Middlewares/Validator");
const { isAuth } = require("../Middlewares/isAuth");
const User = require("../Models/User");


const userRouter = express.Router()

userRouter.post('/SignUp',SignUpValidator,validation,SingUp)

userRouter.post('/SingIn',SignUpValidator,validation,singIn)

userRouter.get('/getCurrentUser',isAuth,(req,res)=> res.send(req.user))

userRouter.get('/getAllUsers',GetAllUsers)

userRouter.get('/getOneUser/:id',GetOneUser)

userRouter.delete('/deleteUser/:id',DeleteUser)

userRouter.put('/updateUser/:id',UpdateUser)


module.exports = userRouter