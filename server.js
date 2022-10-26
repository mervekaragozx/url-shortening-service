const express = require('express')
const { addListener } = require('nodemon')
const app = express()
const PORT = process.env.PORT || 5000
app.listen(PORT, () => console.log('server başlatıldı, listening PORT ${PORT}'))