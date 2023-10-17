const express=require('express')
const router=express.Router()

const {signin,logout,forgotpassword,passwordreset,dashboard,changePassword}=require('../controllers/UserControllers')
const { resolveContent } = require('nodemailer/lib/shared')
const { isLoggedIn } = require('../middlewares/users')



router.route("/signin").post(signin)
router.route("/logout").get(logout)
router.route("/forgotpassword").post(forgotpassword)
router.route("/password/reset/:token").post(passwordreset)
router.route("/dashboard").get(isLoggedIn,dashboard)
router.route("/changepassword").post(isLoggedIn,changePassword)


module.exports=router
