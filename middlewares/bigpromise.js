module.exports=(func)=>(req,res,next)=>
    Promise.resolve(req,res,next).catch(next)
