const express = require('express')

const Myclient = require('../models/myClients.js')
const nodeMailer = require('nodemailer')

const clientRouter = express.Router()

let mailTransporter = nodeMailer.createTransport({
    service: 'gmail',
    auth: {
        user:process.env.email,
        pass: process.env.password
    }
})

clientRouter.post('/', async(req,res)=>{
    try {
        const{firstName, lastName, email, phone} = req.body
        const newClient = await new Myclient(req.body)
            newClient.save()
           
            const mailDetails = {
                from: email,
                to:process.env.email,
                subject: "New Contact",
                text: `You have a new contact. Their name is ${firstName} ${lastName}. Their email is ${email} and phone number is ${phone}`
            }
            mailTransporter.sendMail(mailDetails, function(err,data){
                if(err){
                    console.log(err)
                    res.status(500).send('failed to send')
                }
                else res.status(200)
            })
            res.status(200).send(newClient)
    } catch (err) {
        res.status(500)
        res.json({message: err})
    }
})





module.exports= clientRouter