const jwt = require('jsonwebtoken')

const createToken = (token_body) => {
    const token = jwt.sign(token_body, process.env.JWT_SECRET_KEY);
    return token
}


module.exports = { createToken }