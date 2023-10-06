const express = require('express')

const Officer = require('../models/loanOfficer.js')

const officerRouter = express.Router()



officerRouter.get('/', async(req,res)=>{
    try {
        const foundAll = await Officer.find({})
        res.status(200).send(foundAll)
    } catch (err) {
        res.status(500)
        res.json({message: 'check get route'})
    }
})

module.exports = officerRouter