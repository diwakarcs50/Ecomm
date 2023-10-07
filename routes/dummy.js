const express=require('express')
const router=express.Router()

const {dummy}=require('../controllers/homeController')


router.route("/dummy").get(dummy)

module.exports=router