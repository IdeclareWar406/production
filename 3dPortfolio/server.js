const express = require('express')
const morgan = require('morgan')
const app = express()
const nodeMailer = require('nodemailer')
require('dotenv').config()
app.use(morgan('dev'))
const path = require('path')

app.use(express.json())

let mailTransporter = nodeMailer.createTransport({
    service:'gmail',
    auth:{
        user:process.env.email,
        pass:process.env.password
    }
})

app.post('/api/email', (req,res)=>{
    const {name, email , message} = req.body

    let mailDetails ={
        from:email,
        to:process.env.email,
        subject: 'New Contact',
        text: `You have a new contact. Their name is ${name}. Their email is ${email}. This is their question. ${message}`
    }
    mailTransporter.sendMail(mailDetails, function(err,data){
        if(err){
        console.log(err)
    res.status(500)
    res.json({message: 'failed to send'})}
    else{
        res.status(200).send('success')
    }
    })
        
  
   
})

app.use('/',(err,res,req,next)=>{
        res.send({errMsg: err.message})
})
app.use(express.static(path.join(__dirname, 'client', 'dist')))
app.get("*", (req,res)=>{
    res.sendFile(path.join(__dirname, 'client', 'dist', 'index.html'))
})


app.listen(8173, ()=>{
    console.log('sever is running')
})

