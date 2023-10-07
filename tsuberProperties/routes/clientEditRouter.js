const express = require('express')

const Myclient = require('../models/myClients.js')

const clientRouter = express.Router()


clientRouter.get('/', async(req,res)=>{
    try {
        const foundAll = await Myclient.find({})
        res.status(200).send(foundAll)
        
    } catch (err) {
        console.log(err)
        res.status(500)
        res.json({message: err})
    }
})


clientRouter.delete('/:clientId', async(req,res)=>{
    try {
        await Myclient.findOneAndDelete({_id: req.params.clientId})
        res.status(200).send('Entry removed')
        
    } catch (err) {
        res.status(404)
        res.json({message: err})
    }
})

clientRouter.put('/:clientId',async(req,res)=>{
    try {
        const updatedClient = await Myclient.findOneAndUpdate({_id: req.params.clientId}, req.body, {new:true})
        res.status(200).send(updatedClient)
    } catch (err) {
        res.status(404)
        res.json({message: err})
    }
})

module.exports = clientRouter