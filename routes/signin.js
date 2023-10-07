const express=require('express')
const router=express.Router()

const {signin,logout}=require('../controllers/UserControllers')


router.route("/signin").post(signin)
router.route("/logout").get(logout)


module.exports=router
