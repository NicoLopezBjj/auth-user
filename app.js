const express=require('express')
const cookieParser=require('cookie-parser')

const app =express()

app.use(express.static('public'))
app.use(express.json())
app.use(cookieParser())

// motor de plantilla
app.set('view engine','ejs')


app.get('/', (req,res)=>{
    res.render('home')
})

app.listen(3200, () => {
    console.log('servidor ejecutandose')
})