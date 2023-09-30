// const { urlencoded } = require('express')
const app=require('./app')
require('dotenv').config()

app.listen(process.env.PORT,()=>{
    console.log(`port is up and running at ${process.env.PORT}`)
})