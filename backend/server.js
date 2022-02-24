const bodyParser = require('body-parser')
const express = require('express')
const dotenv =  require('dotenv')

const { dbConn } = require('./config/dbConn')

const PORT = 3000

dotenv.config()

// connect to the database
dbConn()

const api = require('./routes/api')
const app = express()

app.use(bodyParser.json())

app.use('/api', api)
app.get('/', (req, res) => {
    res.send('hey')
})

app.listen(PORT, console.log(`server running ${PORT}`))