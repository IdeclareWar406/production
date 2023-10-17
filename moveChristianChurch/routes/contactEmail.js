const express = require('express')

const nodeMailer = require('nodemailer')

const contactRouter = express.Router()

let mailTransporter = nodeMailer.createTransport({
    service: 'gmail',
    auth:{
        user:process.env.email,
        pass: process.env.password
    }
})

contactRouter.post('/' ,async(req,res)=>{
    try {
        const {name, email, question} = req.body
        let mailDetails ={
            from:process.env.email,
            to:process.env.email,
            subject: `${name} has a question for you.`,
            text: `Here is the message. ${question} Here is their email to respond to ${email}.`
        }
        mailTransporter.sendMail(mailDetails, function(err,data){
            if(err){
                throw err
            }
            else res.status(200).send('Your message has been sent.')
        } )

    } catch (err) {
        res.status(500)
        res.json({message: 'failed to send. Server error contact admin.'})
    }
})

module.exports= contactRouter