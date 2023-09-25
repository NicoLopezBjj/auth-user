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
const dbUrl = 'mongodb+srv://lopeznnr:prSI2oL89tcO40dw@cluster0.ml3lhxv.mongodb.net/?retryWrites=true&w=majority'

const connectToDatabase = async () => {
  try {
    const result = await mongoose.connect(dbUrl);
    console.log('Conexión exitosa a la base de datos');
    app.listen(3200, () => {
      console.log('Servidor iniciado en el puerto 3200');
    });
  } catch (error) {
    console.error('Error al conectar a la base de datos:', error);
  }
}

connectToDatabase();



// mongoose.connect(dbUrl)
// .then((result)=>app.listen(3200))
// .catch((error)=>console.log(error))



app.get('/', (req,res)=>{
    res.render('home')
})

app.use(authRouter)

// app.listen(3200, () => {
//     console.log('servidor ejecutandose')
// })