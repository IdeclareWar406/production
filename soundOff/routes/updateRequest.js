const express = require('express')

const updateRouter = express.Router()

const nodeMailer = require('nodemailer')

let mailTransporter = nodeMailer.createTransport( {
    service: "gmail",
    auth:{
        user: process.env.email,
        pass: process.env.password
    }
})


updateRouter.post("/updateRequest", async(req,res)=>{
    try {
        const {name, email, info} = req.body

        let mailDetails = {
            from: process.env.email,
            to: process.env.email,
            subject: "update request",
            text: `${name} is requesting an update and provided this information. ${info}. Please contact them at ${email}`
        }
        mailTransporter.sendMail(mailDetails, function (err, data){
            if(err){
                console.log(err)
                res.status(500)
                res.json({message: "failed to send"})
            }
            else res.status(200).send("Message was sent successfully")
        })



    } catch (err) {
        res.status(500)
        res.json({message: "check the emailer"})
    }
})




module.exports = updateRouter