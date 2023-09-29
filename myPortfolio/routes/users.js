const express = require('express')
const Portuser = require('../models/user.js')
const userRouter = express.Router()




userRouter.get('/', async(req,res)=>{
    try{
        const adminCheck = await Portuser.findOne({_id: req.auth._id})
            if(adminCheck.isAdmin){
        const foundUsers = await Portuser.find({})
       const noPass = foundUsers.map((user)=>{
           return user.withoutPassword()
        })
        res.status(200).send(noPass)}
        else if(!adminCheck.isAdmin){
          
            res.status(200).send(adminCheck.withoutPassword())
        }
    }
    catch{
        res.status(404)
        res.json({message: 'none were found'})
    }

})




module.exports= userRouter