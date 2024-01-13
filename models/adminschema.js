const mongoose=require("mongoose")

const memberschema=mongoose.Schema({
    username:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    is_admin:{
        type:String,
        default:0
    }
},{timestamps:true})

module.exports=new mongoose.model("memberinfo",memberschema)