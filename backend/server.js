const bodyParser = require('body-parser')
const express = require('express')



const PORT = 3000


const api = require('./routes/api')
const app = express()

app.use(bodyParser.json())

app.use('/api', api)
app.get('/', (req, res) => {
    res.send('hey')
})

app.listen(PORT, console.log(`server running ${PORT}`))