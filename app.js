const express=require('express')
const cookieParser=require('cookie-parser')
const authRouter=require('./routes/authRoutes')
const mongoose = require('mongoose')

const app =express()

app.use(express.static('public'))
app.use(express.json())
app.use(cookieParser())

// motor de plantilla
app.set('view engine','ejs')

// conection database MONGO DB ATLAS

const dbUrl = 'mongodb+srv://lopeznnr:<password>@cluster0.7cmpogq.mongodb.net/?retryWrites=true&w=majority'
mongoose.connect(dbUrl)
.then((result)=>app.listen(3200))
.catch((error)=>console.log(error))

app.get('/', (req,res)=>{
    res.render('home')
})

app.use(authRouter)

// app.listen(3200, () => {
//     console.log('servidor ejecutandose')
// })