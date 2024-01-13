const mongoose=require("mongoose")

const gallerymodel=mongoose.Schema({
    image:{
        type:String,
        required:true
    },
    date:{
        type:Date,
        default:Date.now()
    }
})

module.exports=new mongoose.model("galleryimg",gallerymodel)