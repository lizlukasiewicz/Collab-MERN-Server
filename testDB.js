require('dotenv').config()
const db = require('./models')
db.connect() //test the db connection

const dbTest = async () => {
    try{
        //Create
        // const newUser = new db.User({
        //     name: 'oliver cromwell',
        //     email: 'o@c.com',
        //     password: 'oliver'
        // })

        // await newUser.save()
        // console.log('newuser:', newUser)
        //read -- at login
        const foundUser = await db.User.findOne({
            name: 'oliver cromwell'
        })

        console.log('found user', foundUser)
    }catch(error) {
        console.log(error)
    }
}

dbTest()