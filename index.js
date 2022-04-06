const serverClass = require('./server')
require('dotenv').config()
const PORT = process.env.PORT || 8080

new serverClass(PORT, '0.0.0.0')