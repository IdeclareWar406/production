const express = require('express')
const nodeMailer = require('nodemailer')
const emailRouter = express.Router()

let mailTransporter = nodeMailer.createTransport({
    service: "gmail",
    auth:{
        user: process.env.email,
        pass: process.env.password
    }
})



emailRouter.post('/', (req,res)=>{
    const firstName = req.body.firstName
    const lastName = req.body.lastName
    const email = req.body.email
    const phone = req.body.phone
   
    let mailDetails = {
        from: req.body.email,
        to: process.env.email,
        subject: 'test mail',
        text: `You have gotten a new contact. ${firstName} ${lastName}. Their contact methods are ${email} and ${phone}`
    }

    mailTransporter.sendMail(mailDetails, function(err, data){
        if(err){
            console.log(err)
            res.status(500).send('err failed to send')
        }
        else {
            res.status(200).send('successfully sent')
        }
    })


})




module.exports = emailRouter