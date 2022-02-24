const mongoose = require('mongoose')
const dbConn = async() => {
    try{
        const connected = await mongoose.connect(process.env.MONGODB_URI ,{
            useNewUrlParser: true, useUnifiedTopology: true
        });
        console.log(`Connected ${connected.host}` )
    }
    catch (error){
        console.log(`error : ${error.message}`)
    }
}
module.exports = { dbConn }
