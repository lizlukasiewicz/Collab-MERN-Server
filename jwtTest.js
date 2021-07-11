const jwt = require('jsonwebtoken')

const jwtTest = () => {
    try{
        
        //user process:
        // create the data payload
        const payload = {
            name: 'weston',
            id: 5
        }
        // signing the jwt
        const token = jwt.sign(payload, 'this is my secret', {expiresIn: 60 * 60})
        console.log(token)
        // request to server:
        //decode the incoming jwt
        const decoded = jwt.verify(token, 'this is my secret')
        console.log(decoded)
    }catch(err) {
        console.log(err)
    }
}

jwtTest()