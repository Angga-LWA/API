//definisi
const express = require('express')
const app = express()

//routes
app.get('/', (req, res)=> {
    res.send('Routes running..!!')
})

//listen
app.listen(3003, () => {
    console.log('Server running in 3003..!!')
})