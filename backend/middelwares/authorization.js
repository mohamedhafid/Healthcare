import userModel from "../models/UserSchema.js";
import doctorModel from "../models/DoctorSchema.js";
import jwt from 'jsonwebtoken';

export const authorization=(req,res,next)=>{
    // getting the token from the authorization header
   if(req.headers || req.headers.authorization)
   {
    var autho=req.headers.authorization.split(" ")[1];
   }
    try{
    var decoded=jwt.verify(autho,"f2e69c06-4e08-4da8-b9f8-1a99cd108bd6");
    }
    catch(error)
    {
        console.log(error);
        res.json({status:"failure",message:"unauthorized"});

    }
    req.userId=decoded.id;
    req.role=decoded.role;
    next()
}

export const restrict=roles=>async(req,res,next)=>{
    const userId=req.userId;

    let patient=await userModel.findById(userId);
    let doctor=await doctorModel.findById(userId);

    if(patient)
    {
        user=patient;
    }
    else{
        user=doctor;
    }

    if(!roles.includes(user.role))
    {
        res.json({status:"failure",message:"user is not authorized"});
    }
}
   


   