const mongoose=require('mongoose')
const dbconnection=()=>{
    mongoose.connect(process.env.DB_URL,{
        useNewUrlParser:true,
        useUnifiedTopology:true,
    })
    .then(()=>{
        console.log("DATABASE CONNECTION SUCCESSFULL...")
    })
    .catch((error)=>{
        console.log(`ISSUE IN CONNECTING WITH DATABASE`)
        console.log(error)
        process.exit(1)
    })
}
module.exports=dbconnection