const express = require("express")
const bodyParser = require("body-parser")
const mongoose=require('mongoose')
const Usermodel = require('./Schema/Model')


const PORT=8787

//create express server
const app = express()
var cors = require('cors')

//middleware
app.use(bodyParser.json())
app.use(cors())

//connect to mongoDB
mongoose.connect( 'mongodb://127.0.0.1:27017/MyCompanyDBName',
     ()=>{
    console.log("mongoDB connected")},
    e=>console.log(e))


    //Routes:-  1. Register
app.post('/register',(req,res)=>{
    console.log(req.body.payloadpass)

    const newUser = new Usermodel({
        FirstName:req.body.payloadpass.FirstName,
        LastName :req.body.payloadpass.LastName,
        email:req.body.payloadpass.Email,
        password:req.body.payloadpass.Password,
    })
    newUser.save((err)=>{
        if(err){
            res.status(200).json({message: 'Some error occurred',err}) 
        }
        else{
            res.status(200).json({message: 'Registered successfully!'})
        }
    })
})


 //Routes:-  2. Login
app.post('/login',(req,res)=>{

//   console.log("---------------Login User Section---------------------------")
    const { email, password } = req.body.payload2;
    // console.log(req.body.payload2)
    payload = {
        email: email,
        password: password
    }
    Usermodel.findOne(payload)
        .then(exists => {
            if (exists) {
                res.status(200).json(
                    { message: 'Welcome!',
                      userid : req.body.payload2.email
            })}
            else {
                Usermodel.findOne({ email: email })
                    .then((exists) => {
                        if (exists) {
                            res.status(200).json({message: 'Please check your password'})
                        }
                        else {
                            res.status(200).json({message: 'Please check you email. If you are a new user please do signup..'})
                        }
                    })
                    .catch(err => console.log(err))
            }
        })
        .catch(err => console.log(err))
})

//Listen To specific port

app.listen(PORT,()=>{
    console.log(`app is running on ${PORT}`)
  })


