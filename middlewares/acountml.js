const isacount=(req,res,next)=>{
    try{
        if(req.session.acuser_id){}
        else{
            res.redirect("/login")
        }
        next()
    }catch(err){
        console.log(err)
    }
}
const acountlogout=(req,res,next)=>{
    try{
        if(req.session.acuser_id){
         res.redirect("/accountinfo")
        }
     next()
    }catch(err){
        console.log(err)
    }
}
module.exports={isacount,acountlogout}
