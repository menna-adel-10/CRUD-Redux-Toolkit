import { Schema, model } from 'mongoose'

const EmployeeSchema = new Schema({
    name : String,
    email : String,
    password : String 
})

const EmployeeModel = model('employees' , EmployeeSchema)
export default EmployeeModel