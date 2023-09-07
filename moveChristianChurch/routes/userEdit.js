const express = require('express')
const User = require('../modules/users')
const userEditRouter = express.Router()



userEditRouter.post("/", async(req,res)=>{

    try{
        const newUser = await User(req.body)
        newUser.save()
        res.status(200)
        res.send(newUser)
    }

    catch{
        res.status(500)
        res.json({message: "check required content"})
    }
})


userEditRouter.delete("/:userId", async(req,res)=>{
    try{
        await User.findOneAndDelete({_id:req.params.userId})
        res.status(200)
        res.send("Entry Removed")
    }

    catch{
        res.status(404)
        res.json({message: "user was not found"})
    }
})

userEditRouter.put("/:userId", async(req,res)=>{
    try{
        console.log(req.body)
        const updatedObject = await User.findOneAndUpdate({_id: req.params.userId}, req.body, {new:true})
        res.status(200)
        res.send(updatedObject.withoutPassword())
    }
    catch{
        res.status(404)
        res.json({message: "user was not found"})
    }
})

module.exports = userEditRouter