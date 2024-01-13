const ismember=(req,res,next)=>{
    try{
        if(req.session.memuser_id){}
        else{
            res.redirect("/login")
        }
        next()
    }catch(err){
        console.log(err)
    }
}
const memberlogout=(req,res,next)=>{
    try{
        if(req.session.memuser_id){
         res.redirect("/members")
        }
     next()
    }catch(err){
        console.log(err)
    }
}
module.exports={ismember,memberlogout}
