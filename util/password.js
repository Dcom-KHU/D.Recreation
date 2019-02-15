const crypto = require('crypto')



exports.MakePassword = (password) => {
    const cipher = crypto.createCipher('aes256', process.env.SECRETKEY)

    cipher.update(password, 'ascii', 'hex')
    return cipher.final('hex')
}
