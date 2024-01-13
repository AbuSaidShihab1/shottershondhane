const mongoose=require("mongoose")

const adminexpensesmodel=mongoose.Schema({
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
    destination:{
        type:String,
        default:0
    }
},{timestamps:true})

module.exports=new mongoose.model("adminexpense",adminexpensesmodel)