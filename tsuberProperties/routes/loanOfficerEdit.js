const express = require('express')

const Officer = require('../models/loanOfficer.js')
const Authuser = require('../models/authUser.js')
const officerRouter = express.Router()



officerRouter.post('/', async(req,res)=>{
    try {
        const newOfficer = await new Officer(req.body)
        newOfficer.save()
        res.status(200).send(newOfficer)
        
    } catch (err) {
        if(err){
            res.status(500)
            res.json({message: err})
        }

        res.status(500)
        res.json({message: 'check post route or'})
    }
})

officerRouter.put('/:officerId', async(req,res)=>{
    try {
        const foundOne = await Officer.findOneAndUpdate({_id: req.params.officerId}, req.body, {new:true})
        res.status(200).send(foundOne)
        
    } catch (err) {
        res.status(500)
        res.json({message: err})
    }
})

officerRouter.delete('/:officerId', async(req,res)=>{
    try {
        const isAdmin = await Authuser.findOne({_id: req.auth._id})
            if(isAdmin.isAdmin){
                await Officer.findOneAndDelete({_id: req.params.officerId})
                res.status(200).send('Entry Removed')
            }
            else {
            const err = 'Unauthorized'
                throw err
        }
    } catch (err) {
        res.status(403)
        res.json({message: err})
    }
})

module.exports = officerRouter