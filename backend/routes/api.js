const express =require('express')
const router = express.Router()
const User = require ('../models/users')

const dotenv =  require('dotenv')

const { dbConn } = require('../config/dbConn')
dotenv.config()

// connect to the database
dbConn()

router.get('/', (req, res) => {
    res.send('API')
})


// API to register User
router.post('/register', (req, res) =>{
    let userData = req.body
    let user = new User(userData)
    user.save((error, registeredUser) =>{
        if(error){
            console.log(error)
        }
        else{
            res.status(200).send(registeredUser)
        }
    })
})

module.exports = router