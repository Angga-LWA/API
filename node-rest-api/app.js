//definisi
const express = require('express')
const app = express()
const mongoose = require('mongoose')
require('dotenv/config')

//routes
app.get('/', (req, res)=> {
    res.send('Routes running..!!')
})

//connection to DB
mongoose.connect(process.env.DB_CONNECTION, { useNewUrlParser: true, useUnifiedTopology: true })
let db = mongoose.connection

db.on('error', console.error.bind(console, 'Database connect Error!'))
db.once('open', () => {
    console.log('Database is Connected!')
})

//listen, TANDA `` untuk memanggil variabel dlm string
app.listen(process.env.PORT, () => {
    console.log(`Server running in ${process.env.PORT}`)
})