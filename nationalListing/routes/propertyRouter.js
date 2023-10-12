const express = require('express')

const Property = require('../models/propertyDetails.js')

const Zone = require('../models/zoneData.js')

const propertyRouter = express.Router()

propertyRouter.get('/state', async(req,res)=>{
    try {
        const foundZone = await Zone.find({state: req.query.state})
        res.status(200).send(foundZone)
    } catch (err) {
        res.status(500)
        res.json({message: err})
    }
})

module.exports = propertyRouter