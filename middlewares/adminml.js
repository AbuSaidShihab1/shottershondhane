const isadmin=(req,res,next)=>{
    try{
        if(req.session.user_id){}
        else{
            res.redirect("/login")
        }
        next()
    }catch(err){
        console.log(err)
    }
}
const adminlogout=(req,res,next)=>{
    try{
        if(req.session.user_id){
         res.redirect("/admindashboard")
        }
     next()
    }catch(err){
        console.log(err)
    }
}
module.exports={isadmin,adminlogout}
