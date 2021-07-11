const jwt = require('jsonwebtoken')
const db = require('../../models')

const authLockedRoute = async (req, res, next) => {
    try{
        // get jwt from authorization headers
        const authHeaders = req.headers.authorization
        //verify the jwt -- if the jwt is not valid will throw to catch
        const decoded = jwt.verify(authHeaders, process.env.JWT_SECRET)
        //find the user from the db
        const foundUser = await db.User.findById(decoded.id)
        //mount the user on the res.locals
        res.locals.user = foundUser
        next()
    }catch(error){
        console.log(error)
        res.status(401).json({msg: 'you are not allowed to be here'})
    }
}

module.exports = authLockedRoute