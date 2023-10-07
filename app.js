const express=require('express')
require('dotenv').config() //configuring the dotenv
const app=express()
var morgan=require('morgan')
var cookieparser=require('cookie-parser')
var fileupload=require('express-fileupload')



//morgan being used as middleware
app.use(express.json())
app.use(express.urlencoded({extended: true}))


//cookie and fileupload 
app.use(cookieparser())
app.use(fileupload({
    useTempFiles:true,
    tempFileDir:'/tmp/'
}))

//temp check
app.set('view engine','ejs')


//using as middleware
app.use(morgan("tiny"))
const home=require('./routes/home')
const dummy=require('./routes/dummy')
const signup=require('./routes/signup')
const signin=require('./routes/signin')


app.use('/api/v1', home)
app.use('/api/v1', dummy)
app.use('/api/v1',signup)
app.use('/api/v1/',signin)

app.get('/signuptest',(req,res)=>{
    res.render('signuptest')
})


module.exports=app
