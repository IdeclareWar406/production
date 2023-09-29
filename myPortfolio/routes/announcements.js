const express = require('express')
const Announcements = require("../models/announcements.js")
const announceRouter = express.Router()

announceRouter.get("/", async(req,res)=>{
    try{
        const foundAll = await Announcements.find({})
        res.status(200).send(foundAll)
    }

    catch{
        res.status(500)
        res.json({message:'check get route'})
    }
})



module.exports = announceRouter