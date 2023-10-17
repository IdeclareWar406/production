const express = require('express')
const User = require('../modules/users')
const userEditRouter = express.Router()
const nodeMailer = require('nodemailer')
const jwt = require('jsonwebtoken')

let mailTransporter = nodeMailer.createTransport({
    service: 'gmail',
    auth:{
        user:process.env.email,
        pass: process.env.password
    }
})

userEditRouter.post("/", async(req,res)=>{

    try{
        const newUser = await User(req.body)
        newUser.save()
        res.status(200)
        res.send(newUser)
    }

    catch{
        res.status(500)
        res.json({message: "check required content"})
    }
})


userEditRouter.delete("/:userId", async(req,res)=>{
    try{
        await User.findOneAndDelete({_id:req.params.userId})
        res.status(200)
        res.send("Entry Removed")
    }

    catch{
        res.status(404)
        res.json({message: "user was not found"})
    }
})

userEditRouter.put("/:userId", async(req,res)=>{
    try{
        console.log(req.body)
        const updatedObject = await User.findOneAndUpdate({_id: req.params.userId}, req.body, {new:true})
        res.status(200)
        res.send(updatedObject.withoutPassword())
    }
    catch{
        res.status(404)
        res.json({message: "user was not found"})
    }
})
userEditRouter.post('/emailCheck', async(req,res)=>{
    try {
        console.log(req.body)
        const newPin = []
        const numbers = [0,1,2,3,4,5,6,7,8,9]
        const foundEmail = await User.findOne({email: req.body.email})
        
        for( let i = 0; i < 7; i++){
            const randomNumber = Math.floor(Math.random()*8 +1)
            newPin.push(numbers[randomNumber])
            
        }
       
        if(foundEmail){
       foundEmail.pin = newPin.join('')
       foundEmail.save()
        console.log(foundEmail, 'email')
        let mailDetails = {
            from:process.env.email,
            to:foundEmail.email,
            subject: "reset password",
            text: `Here is the pin you need to reset your account. ${foundEmail.pin}`
        }

        mailTransporter.sendMail(mailDetails, function(err,data){
            if(err){
                console.log(err)
            }
            else console.log('success')
        })
        res.status(200).send("check your email for your pin")}
        
    } catch (err) {
        console.log(err)
        res.status(404)
        res.json({message: err})
    }
})
userEditRouter.post("/resetPass" ,async(req,res)=>{
    try {console.log(req.body)
        const foundUser = await User.findOne({email: req.body.email})
        if(foundUser){
            console.log(foundUser)
        if (foundUser.pin === req.body.pin){
            console.log('this is true')
            foundUser.password = req.body.password
            foundUser.pin = ""
            console.log(foundUser.password)
            foundUser.save()
            const token = jwt.sign(foundUser.withoutPassword(), process.env.SECRET)
            res.status(200).send({token, user:foundUser.withoutPassword()})
        }}
    } catch (err) {
        console.log(err)
        res.status(404)
        res.json({message: err})
    }
})

module.exports = userEditRouter