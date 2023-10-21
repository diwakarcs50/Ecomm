// base:Products.find
// bigQuery:search=coder&page=2&category=shortsleaves&rating[gte]=4


class whereClause{
    constructor(base,bigQ){
       this.base=base
       this.bigQ=bigQ
    }

    search(){
        const searchWord=this.bigQ.search?{
            name:{
                $regex:this.bigQ.search,
                $options:'i'
               
            }
           
        }:{}


        this.base=this.base.find({...searchWord})
       
    
        return this
    }

    pager(pageLimit){


        let currentPage=1

        if(this.bigQ.page){
            currentPage=this.bigQ.page

        }

        const skipPages=pageLimit * (currentPage-1)
        this.base=this.base.limit(pageLimit).skip(skipPages)
       
        return this


    }

    filter(){
        let filterQ={...this.bigQ}
        filterQ.delete ["search"]
        filterQ.delete ["limit"]
        filterQ.delete ["page"]
        
        //convert the object to string
        let stringOfCopyQ=JSON.stringify(filterQ)

        stringOfCopyQ=stringOfCopyQ.replace(/\b(gte|lte|gt|lt)\b/g,(m)=>`$${m}`)  

        const jsonOfCopyQ=JSON.parse(stringOfCopyQ)

        this.base=this.base.find(jsonOfCopyQ)
        





    }




}