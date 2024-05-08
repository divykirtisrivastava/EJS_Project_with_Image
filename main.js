const express = require('express')
const db=require('./databaseConfig.js')
const bodyParser = require('body-parser')
const userRouter=require('./routes/userRoutes.js')
let app = express()
app.use(express.json())
app.use(bodyParser.urlencoded({extended: true}))
app.use(express.static('uploads'))


db.connect((err)=>{
    if(err) throw err
    else{
        console.log("database connected")
    }
})



app.use('/api',userRouter)

app.listen(3000, ()=>{
    console.log(`server is running on http://localhost:3000/api/`)
})