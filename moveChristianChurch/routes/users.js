const express = require('express')
const User = require("../modules/users.js")
const userRouter = express.Router()

userRouter.get("/", async(req,res)=>{
    try{
        const foundAll = await User.find({})
        res.status(200)
        res.send(foundAll)
    }
    catch{
        res.status(500)
        res.json({message: "check endpoint or get request"})
    }

})


userRouter.get("/search/user", async(req,res)=>{
    try{
        const matches = await User.find({firstName: req.query.user} )
      res.status(200)
      res.send(matches)

    }
    catch{
        res.status(404)
        res.json({message: "check get query"})
    }
})

userRouter.get("/:userId", async(req,res)=>{
    try{
        const foundOne = await User.find({_id: req.params.userId})
        res.status(200)
        res.send(foundOne)
    }
    catch{
        res.status(404)
        res.json({message:"Entry does not exist"})
    }
})

userRouter.post("/", async(req,res)=>{

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

userRouter.delete("/:userId", async(req,res)=>{
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

userRouter.put("/:userId", async(req,res)=>{
    try{
        const updatedObject = await User.findOneAndUpdate({_id: req.params.userId}, req.body, {new:true})
        res.status(200)
        res.send(updatedObject)
    }
    catch{
        res.status(404)
        res.json({message: "user was not found"})
    }
})







module.exports = userRouter