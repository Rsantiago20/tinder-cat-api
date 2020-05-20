const express = require('express')
const app = express()
const catsRoutes = require('./routes/cats')
const interestRoutes = require('./routes/interests')

require('../tindercat-api/connection/mongoConnection')

app.use(express.json())
app.use(express.urlencoded({ extended:false })) 

app.use('/cats', catsRoutes)
app.use('/interests', interestRoutes)


app.listen(5001, () => console.log('Server runing'))
