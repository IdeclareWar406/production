const express = require('express')
const Portuser = require('../models/user.js')

const userEditRouter = express.Router()

userEditRouter.delete("/:userId", async(req,res)=>{
    try{
   await Portuser.findOneAndDelete({_id: req.params.userId})
    res.status(200).send("entry removed")}
    catch{
        res.status(404)
        res.json({message: 'id was not found or issue in route'})
    }
})

userEditRouter.put("/:userId", async(req,res)=>{
    try{
    const updatedUser = await Portuser.findOneAndUpdate({_id: req.params.userId}, req.body, {new:true})
    res.status(200).send(updatedUser)}
    catch{
        res.status(404)
        res.json({message: 'id was not found or issue with route'})
    }
})



module.exports = userEditRouter