const User = require('../models/Users');
const customError = require('../utils/customerror');
const jwt=require('jsonwebtoken')


exports.isLoggedIn=async(req,res,next)=>{
  
    const token=req.cookies.cookieToken ;
     
    if(!token){
        return next(new customError('token not found',401))
    }

    const decoded =jwt.verify(token,process.env.JWT_SECRET)

     req.user=await User.findById(decoded.id)

     next();

}
