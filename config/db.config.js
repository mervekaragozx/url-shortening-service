const mangoose = require('mangoose')
const DB_URI = 'mongodb://localhost:27017/urlshortener'

mangoose.connect(DB_URL, {useNewUrlParser: true, useUnifiedTopology: true})

const connection = mangoose.connection
module.exports = connection