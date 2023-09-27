const User = require ('../models/User')

// manejo de errores
const handleErrors=(err)=>{
    console.log(err.message,err.code)
    let error = {email:'',password:''}
// validacion de errores
    if(err.message.includes('usuarios validation failed')){
        console.log(Object.values(err.errors))
    }
}

module.exports.signup_post= async (req,res)=>{
    // destructuring
    const {email,password}=req.body
    
    try{
        const user = await User.create({email,password})
        res.status(201).json(user)
    }catch(err){
        const errors = handleErrors(err)
        console.log(err)
    }
}

module.exports.signup_get=(req,res)=>{
    
}

module.exports.login_post=(req,res)=>{
    
}

module.exports.login_get=(req,res)=>{
    
}