const express = require('express')
const Portuser = require('../models/user.js')
const bcrypt = require('bcrypt')
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
       let isPassword = false
        if(req.body.currentPassword != ""){
        
            const foundUser = await Portuser.findOne({_id: req.params.userId})
            
            
                foundUser.checkPassword(req.body.currentPassword , (err, isMatch)=>{
                    
                    if(err){
                        console.log('error on check pass edit')
                        res.status(403).send('error on password edit')
                    }
                    if(!isMatch){
                        console.log('failed attempt')
                        res.status(403).send('password does not match')
                    }
                    if(isMatch){
                        console.log('match')
                      isPassword = true
                     updater()
                    }
                })
        
                 function updater(){
                console.log('fired')
                foundUser.password = req.body.password
              
                foundUser.save()
                res.status(200).send(foundUser.withoutPassword())}
            
                
        }

    else if(req.body.currentPassword === ''){
        delete req.body.password
        delete req.body.currentPassword
    const updatedUser = await Portuser.findOneAndUpdate({_id: req.params.userId}, req.body, {new:true})
    res.status(200).send(updatedUser.withoutPassword())}}


    catch (err) {
        console.log(err)
        res.status(404)
        res.json({message: 'id was not found or issue with route'})
    }
})


function updateMyPass(isMatch){

}



module.exports = userEditRouter