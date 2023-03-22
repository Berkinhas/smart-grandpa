const jwt = require('jsonwebtoken')
const { config } = require('dotenv')

config()

module.exports = (req, res, next) => {
    const authHeader = req.headers.authorization

    if(!authHeader) {
        return res.status(401).send({
            message: 'error: No token provided'
        })
    }

    const parts = authHeader.split(' ')

    if(!parts.length == 2){
        return res.status(401).send({
            message: 'error: Token error'
        })
    }

    const [ scheme, token ] = parts

    if(!/^Bearer$/i.test(scheme)) {
        return res.status(401).send({
            message: 'badly formatted token'
        })
    }

    jwt.verify(token, process.env.SECRET_KEY, (err, decoded) => {
        if(err) {
            res.status(401).send({
                message: 'error: Token invalid'
            })
        }

        req.userId = decoded.id
        
        return next()
    })
}