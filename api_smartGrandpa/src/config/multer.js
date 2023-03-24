const multer = require('multer')
const path = require('path')
const crypto = require('crypto')


module.exports = {
        dest: path.resolve(__dirname, "..", "..", "tmp", "uploads"),
        storage: multer.diskStorage({
            destination: (req, file, cb) => {
                cb(null, path.resolve(__dirname, "..", "..", "tmp", "uploads"))
            },
            filename: (req, file, cb) => {
                crypto.randomBytes(16, (err, hash) => {
                    if (err) cb(err)
    
                    file.key = `${hash.toString('hex')}-${file.originalname}`
    
                    cb(null, file.key)
                })
            },
            fileFilter: (req, file, cb) => {
                const allowedMimes = [
                    'image/png',
                    'image/pjpeg',
                    'image/jpeg',
                    'image/gif',
                    'application/pdf'
                ]
    
                if(allowedMimes.includes(file.mimetype)) {
                    cb(null, true)
                } else {
                    cb(new Error('Tipo do arquivo invalido'))
                }
            }
        })
}
