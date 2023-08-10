const express = require('express')
const Prayer = require("../modules/prayer.js")
const prayerRouter = express.Router()

prayerRouter.get("/", async(req,res)=>{
    try{
        const foundAll = await Prayer.find({})
        res.status(200)
        res.send(foundAll)
    }
    catch{
        res.status(500)
        res.json({message: "check the get request"})
    }
})

prayerRouter.post("/", async(req,res)=>{
    try{
        const newRequest = await new Prayer(req.body)
        newRequest.save()
        res.status(200)
        res.send(newRequest)
    }
    catch{
        res.status(500)
        res.json({message: "check the post method"})
    }
})

prayerRouter.delete("/:prayerId", async(req,res)=>{
    try{
       await Prayer.findOneAndDelete({_id:req.params.prayerId})
        res.status(200)
        res.send("Request was removed")
    }
    catch{
        res.status(404)
        res.json({message:"check id or delete method"})
    }
})

prayerRouter.put("/:prayerId", async(req,res)=>{
    try{
        const updatedObject = await Prayer.findOneAndUpdate({_id: req.params.prayerId}, req.body, {new:true})
        res.status(200)
        res.send(updatedObject)
    }
    catch{
        res.status(404)
        res.json({message:"check id or put method"})
    }
})



module.exports = prayerRouter