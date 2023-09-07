const express = require('express')
const User = require("../modules/users.js")
const userRouter = express.Router()

userRouter.get("/", async(req,res)=>{
    try{
        const foundAll = await User.find({})
        const noPass = foundAll.map((user)=>{
          return  user.withoutPassword()
            
        })
        res.status(200)
        res.send(noPass)
    }
    catch{
        res.status(500)
        res.json({message: "check endpoint or get request"})
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











module.exports = userRouter