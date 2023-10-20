const express = require('express')

const State = require('../models/states.js')
const states = require('../models/states.js')
const statesRouter = express.Router()

statesRouter.get('/', async(req,res)=>{
    try {
        const foundStates = await State.find({})
        res.status(200).send(foundStates)
    } catch (err) {
        res.status(500)
        res.json({message: err})
    }
})



module.exports = statesRouter