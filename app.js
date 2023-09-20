const express=require('express')
const cookieParser=require('cookie-parser')
const authRouter=require('./routes/authRoutes')

const app =express()

app.use(express.static('public'))
app.use(express.json())
app.use(cookieParser())

// motor de plantilla
app.set('view engine','ejs')


app.get('/', (req,res)=>{
    res.render('home')
})

app.use(authRouter)

app.listen(3200, () => {
    console.log('servidor ejecutandose')
})