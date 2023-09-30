const express = require('express')
const Authuser = require('..//models/authUser')
const jwt = require('jsonwebtoken')


const authRouter = express.Router()


authRouter.post('/signup', async(req,res)=>{
    try {
        const foundOne = await Authuser.findOne({username: req.body.username})
        if(foundOne){
            const err = 'username already exists'
            throw err
        }

        if(!foundOne){
            const newUser = await new Authuser(req.body)
            await newUser.save()
            const token = jwt.sign(newUser.withoutPassword(), process.env.SECRET)
            res.status(200).send({token, user: newUser.withoutPassword()})
        }
        

    } catch (err) {
        console.log(err)
        res.status(500)
        res.json({message: err})
    }
})

authRouter.post('/login', async(req,res)=>{
 try{   const foundOne = await Authuser.findOne({username: req.body.username})
    if(foundOne){
        foundOne.checkPassword(req.body.password, (err,isMatch)=>{
            if(err){
                console.log(err)
                res.status(403)
                res.json({message: err})
            }
            if(!isMatch){
                console.log('no match')
                res.status(403)
                res.json({message: 'username or password does not match'})
            }
            if(isMatch){
                const token = jwt.sign(foundOne.withoutPassword(), process.env.SECRET)
                res.status(200).send({token, user:foundOne.withoutPassword()})
            }
        })
    }
    if(!foundOne){
        const err = 'account does not exist'
        throw err
    }
}

catch (err){
    console.log(err)
    res.status(500)
    res.json({message: err})
}
})






module.exports = authRouter