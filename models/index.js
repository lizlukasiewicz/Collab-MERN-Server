//require the mongoose package
const mongoose = require('mongoose')
//connection function
const connect = () => {
    const MONGODB_URI = process.env.MONGODB_URI

    mongoose.connect(MONGODB_URI, {
        useNewUrlParser: true,
        useFindAndModify: false,
        useUnifiedTopology: true,
        useCreateIndex: true
    })

    const db = mongoose.connection

    db.once('open', () => {
        console.log(`MongoDB connection at ${db.host}:${db.port}` )
    })

    db.on('error', (err) => {
        console.log(`We have an error!!! PANIC!!!`)
        console.log(err)
    })
}
//export the connection function and models

module.exports = {
    connect,
    User: mongoose.model('user', require('./User.js'))
}