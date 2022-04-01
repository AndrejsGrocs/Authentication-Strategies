const express = require('express')
const UserData = require('../models/User')


const router = express.Router()




router.post('/register', async (req, res)=>{
    const {body} = req;

    try{
        const registerUser = await UserData.create({
            firstname: body.firstname,
            lastname: body.lastname 
        })
        return res.status(200).json(registerUser)
    } catch (error){
        
        return res.status(500).send('Error registering user')
    }
})




module.exports = router