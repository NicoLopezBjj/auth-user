const mongoose = require ('mongoose')

const userSchema = new mongoose.Schema({
    email:{
        type:String,
        required:[true,'por favor ingrese un email'],
        unique:true,
        lowercase:true,
        validate:[(val)=>{val},'por favor ingrese un email valido']
    },
    password:{
        type:String,
        required:[true,'por favor ingrese un password'],
        minlength:[6,'por favor ingrese un maximo de 6 caracteres']
    }
})

const User = mongoose.model('usuarios', userSchema)
module.exports= User