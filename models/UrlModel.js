const mangoose = require('mangoose')

const URLSchema = new mangoose.Schema({
    urlCode: String,
    longUrl: String,
    shortUrl: String,
    date: {
        type: String,
        default: Date.now
    }
})

module.exports = mangoose.model('Url', URLSchema)