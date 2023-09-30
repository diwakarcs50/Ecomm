exports.home=(req,res)=>{
     res.status(200).json({
        success:true,
        greetins:"hello from api"
     })
}

