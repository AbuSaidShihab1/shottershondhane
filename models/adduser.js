const mongoose=require("mongoose")

const addusermodel=mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    number:{
        type:String,
        required:true
    },
    membercode:{
        type:String,
        required:true
    },
    userimage:{
          type:String,
        required:true
    }
},{timestamps:true})

module.exports=new mongoose.model("adduser",addusermodel)