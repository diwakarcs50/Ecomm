const express=require('express')
require('dotenv').config() //configuring the dotenv
const app=express()
const home=require('./routes/home')

//using as middleware
app.use('/api/v1', home)


module.exports=app
