const express = require('express')
const Prayer = require("../modules/prayer.js")
const prayerRouter = express.Router()


prayerRouter.get("/", async(req,res, next)=>{
    try{
            
        const foundAll = await Prayer.find({})
       
        res.status(200)
        res.send(foundAll)
       

    }
    catch (err){
        console.log(err)
        res.status(500)
        res.json({message: "check the get request"})
    }
})



prayerRouter.post("/", async(req,res)=>{
    try{
        const newRequest = await new Prayer(req.body)
        newRequest.save()
        hotData.push(newRequest)
        res.status(200)
        res.send(newRequest)
    }
    catch{
        res.status(500)
        res.json({message: "check the post method"})
    }
})





module.exports = prayerRouter