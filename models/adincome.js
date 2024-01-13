const mongoose=require("mongoose")

const adminincomemodel=mongoose.Schema({
    type:{
        type:String,
        required:true
    },
    source:{
        type:String,
        required:true
    },
    amount:{
        type:String,
        required:true
    },
    membercode:{
        type:String,
        required:true
    }
},{timestamps:true})

module.exports=new mongoose.model("adminincome",adminincomemodel)