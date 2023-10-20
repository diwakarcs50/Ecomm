const mongoose=require('mongoose')
const productSchema=new mongoose.Schema({
    name:{
        type:String,
        required:[true,'Name field is required'],
        trim:true,
        maxlength:[120,'Name must be Less than 120 characters']
    },
    price:{
        type:Number,
        required:[true,'price must me mentioned'],
        maxlength:[5,'product price not more than five digits']
    },
    description:{
        type:String,
        required:[true,'description is required'],
    
    },
    photos:[
        {
            id:{
                type:String,
                required:[true,'photo id is required']
            },
            secure_url:{
                type:String,
                required:[true,'secure url is required']
            }
        }
    ],
    category:{
        type:String,
        required:[true,'choose from short-sleeves,long-sleeves,sweat-shirts,hoodies'],
        enum:{
            values:[
                'short-sleeves',
                'long-sleeves',
                'sweat-shirts',
                'hoodies'
            ],
            message:'please select category from ..'

        }
    },
    brand:{
        type:String,
        required:[true,'please add a brand']
    },
    // stock:{
    //     type:Number,
    //     default:0
    // },
    ratings:{
        type:Number,
        default:0
    },
    numberOfReviews:{
        type:Number,
        default:0

    },
    reviews:[
        {
            user:{
                type:mongoose.Schema.ObjectId,
                ref:'User',
                required:[true,'user is required to give review'],

            },
            name:{
                type:String,
                required: true,
            },
            rating:{
                type:Number,
                required:true
            },
            comment:{
                type:String,
                required:true
            }

        }

    ],
    user:{
        type:mongoose.Schema.ObjectId,
        ref:'User',
        required:true
    },
    createdAt:{
        type:Date,
        default:Date.now
    }

    


})

// products
// -name
// -price
// -description
// -photos[]
// -category
// -brand
// -stock
// -ratings
// -numOfReviews
// -reviews[user,name,rating,comment]
// -user
// -createdAt

module.exports=new mongoose.model('Product',productSchema)


