const BigPromise=require('../middlewares/bigpromise')


exports.home=(req,res)=>{
   res.status(200).json({
      success:true,
      greetins:"hello from api"
   })
}

exports.dummy= (req,res)=>{
    res.status(200).json({
      succes:true,
      sentby:"dummy",
   })

}



