import exp from 'express'
import {empModel} from '../models/EmpModel.js'
export const empApp=exp.Router()
//Create employee
empApp.post("/employee",async(req,res)=>{
    //get employee details from client
    const empObj=req.body;
    //create employee document
    const emp=await empModel.create(empObj)
    //send response
    res.status(201).json({message:"Employee created successfully",payload:emp}) 
})

//Read all employees
empApp.get("/employee",async(req,res)=>{
    //get all employee documents from db
    const employees=await empModel.find()
    //send response
    res.status(200).json({message:"Employees fetched successfully",payload:employees})
})


//Edit employee
// 
empApp.put("/employee/:id",async(req,res)=>{
    const modedemp = req.body
    const eid = req.params.id

    const updatedEmployee = await empModel.findByIdAndUpdate(eid,{$set:{...modedemp}},{returnDocument:"after",runValidators:true})
    res.status(200).json({message:"User Updated",payload:updatedEmployee})
})


//Delete employee
empApp.delete("/employee/:id",async(req,res)=>{
    //get the emp details to delete
    const emp=req.params.id;
    //check whether the emp exist or not
    const empObj=await empModel.findByIdAndDelete(emp)
    if(!empObj){
        return res.status(400).json({message:"Employee not found"})
    }       
    //send response
    return res.status(200).json({message:"Employee details deleted successfully",payload:empObj})
})