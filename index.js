// const { urlencoded } = require('express')
const app=require('./app')
const dbconnection = require('./config/database')
const cloudinary=require('cloudinary')
// const chalk =require('chalk')



dbconnection()

//cloudinary configure
cloudinary.config({
    cloud_name:process.env.CLOUDINARY_NAME,
    api_key:process.env.CLOUDINARY_API,
    api_secret:process.env.CLOUDINARY_SECRET
})





app.listen(process.env.PORT,()=>{
    console.log(`port is up and running at ${process.env.PORT}`)
})
// module.exports = require('./yourMainModule.js');
