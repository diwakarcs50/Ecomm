const express=require('express')
const router=express.Router()

const {signin,
    logout,
    forgotpassword,
    passwordreset,
    dashboard,
    changePassword,
    updateDetails,
    adminAllUser,
    managerAllUser,
    adminGetOneUser,
    adminCanUpdate,
    deleteUser}=require('../controllers/UserControllers')
const { resolveContent } = require('nodemailer/lib/shared')
const { isLoggedIn,customRole } = require('../middlewares/users')



router.route("/signin").post(signin)
router.route("/logout").get(logout)
router.route("/forgotpassword").post(forgotpassword)
router.route("/password/reset/:token").post(passwordreset)
router.route("/dashboard").get(isLoggedIn,dashboard)
router.route("/changepassword").post(isLoggedIn,changePassword)
router.route("/change/dashboard").post(isLoggedIn,updateDetails)
router.route("/admin").get(isLoggedIn,customRole('admin'),adminAllUser)
router.route("/manager").get(isLoggedIn,customRole('manager'),managerAllUser)
router.route("/admin/:id")
.get(isLoggedIn,customRole('admin'),adminGetOneUser)
.put(isLoggedIn,customRole('admin'),adminCanUpdate)
.delete(isLoggedIn,customRole('admin'),deleteUser)



module.exports=router
