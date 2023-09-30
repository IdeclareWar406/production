const express = require('express')

const Myclient = require('../models/myClients.js')


const clientRouter = express.Router()



clientRouter.post('/', async(req,res)=>{
    try {
        const newClient = await new Myclient(req.body)
            newClient.save()
            res.status(200).send(newClient)
        
    } catch (err) {
        res.status(500)
        res.json({message: err})
    }
})





module.exports= clientRouter