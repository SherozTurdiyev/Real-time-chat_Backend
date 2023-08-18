const bcrypt = require('bcrypt');

const password_to_hash = async (password) => {
    const salt = await bcrypt.genSalt(10)
    const hashPass = await bcrypt.hash(password, salt)
    return hashPass
}

const password_compare = async (password, hash) => {
    const isCheckingPass = await bcrypt.compare(password, hash);

    return isCheckingPass
}

module.exports = { password_to_hash , password_compare }