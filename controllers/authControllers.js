const User = require ('../models/User')

module.exports.signup_post=(req,res)=>{
    // destructuring
    const {email,password}=req.body
    try{
        const user = User.create({email,password})
        res.status(201).json()
    }catch(error){
        console.log(error)
    }
}

module.exports.signup_get=(req,res)=>{
    
}

module.exports.login_post=(req,res)=>{
    
}

module.exports.login_get=(req,res)=>{
    
}