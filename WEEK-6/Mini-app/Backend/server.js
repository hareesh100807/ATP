import exp from 'express';
import{config} from 'dotenv';
import {empApp} from './API/EmployeeAPI.js'
import {connect}from 'mongoose';
import cors from 'cors';
config();

const app=exp();
app.use(exp.json());
// Allow requests from the Vite dev server (no trailing slash) and handle preflight
app.use(cors({
    origin: "http://localhost:5173",
    optionsSuccessStatus: 200
}));
// Ensure CORS preflight (OPTIONS) requests are handled
app.options('*', cors());

app.use("/emp-api",empApp)

const connectDB=async()=>{
    try{
        await connect(process.env.DB_URL);
        const port=process.env.PORT;
        app.listen(port,()=> console.log(`server running on port ${port}`));
    }
    catch(err){
        console.log("Error in connecting to databse")
    }
};
connectDB();

app.use((req,res,next)=>{
    console.log(req.url)
    res.status(404).json({message:"error occured",error:`the path ${req.url} is not found`})
})

