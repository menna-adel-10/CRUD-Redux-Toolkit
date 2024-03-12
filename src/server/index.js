import express, { json } from 'express'
import { connect } from 'mongoose'
import cors from 'cors'
import { findOne, create } from './models/Employee'

const app = express()
app.use(json())
app.use(cors())

connect('mongodb://127.0.0.1:27017/employee')



app.post('/login' , (req , res) =>{
    const {email , password} = req.body;
    findOne({email :email})
        .then(user => {
            if(user) { 
                if(user.password === password) {
                    res.json("Success")
                } else {
                    res.json('The password is incorrect')
                }
            } else {
                res.json("NOT EXIST")
            }

        })
        .catch(err => res.json(err))
    
})

app.post('/register' , (req , res) =>{
    create(req.body)
        .then(employees => res.json(employees))
        .catch(err => res.json(err))
    
})

app.listen(3001 , () => {
    console.log("server is running");
})