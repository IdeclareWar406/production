const express = require('express')
const Portuser = require('../models/user.js')
const userRouter = express.Router()

userRouter.get('/', async(req,res)=>{
    try{
        const foundUsers = await Portuser.find({})
        res.status(200).send(foundUsers)
    }
    catch{
        res.status(404)
        res.json({message: 'none were found'})
    }

})




module.exports= userRouter