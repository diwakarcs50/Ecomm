
const Cookietoken=(res,User)=>{

const token=User.getjwtToken()
const options={
    expires:new Date(Date.now() + 3 * 60 * 60 * 1000),
    httponly:true
}

res.status(200).cookie('cookieToken',token,options).json({
  success:true,
  token,
  User

})
}
module.exports=Cookietoken