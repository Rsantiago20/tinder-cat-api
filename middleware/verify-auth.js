jwt = require('jsonwebtoken')
const { SECRET } = require('../config/constants')

const verifyAuth = () => {
    
    if (require.headers.authorization  && req.headers.authorization.split(' ')[0] === 'Bearer'){
        const token = req.headers.authorization.split(' ')[1]
        try{
            const payload = jwt.verify(token, SECRET)
            req.query.catId = payload.catId
        }catch(err){
            res.status(401).json({ error: 'Unauthorized' })
        }
    }else{
        res.status(400).json({ error: 'token is required' })
    }
    next()
}

module.exports = verifyAuth