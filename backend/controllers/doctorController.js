import doctorModel from '../models/DoctorSchema.js';
// getting the single user
export const getSingleDoctor=async(req,res,next)=>{
    const id=req.params.id;
    let doctor=null;
    try{
        doctor =await doctorModel.find({_id:id});

        if(!doctor)
        {
           return res.json({status:"failure",message:"doctor doesn't exist"});  
        }
        return res.json({status:"success",message:"the doctor is retreived successfully",data:doctor});
    }
   
    catch(error)
    {
        console.log(error);
        return res.json({status:"failure",message:"Can't able to get the doctor"});
    }
}
// getting the multiple user
export const getAllDoctor=async(req,res,next)=>{
    let doctor=null;
    try{
        doctor =await doctorModel.find({});

        if(!doctor)
        {
            return  res.json({status:"failure",message:"doctor doesn't exist"});  
        }
        return res.json({status:"success",message:"the doctor is retreived successfully",data:doctor});
    }
   
    catch(error)
    {
        console.log(error);
        return res.json({status:"failure",message:"Can't able to get the doctor"});
    }
}
//updating the user
export const updateDoctor=async(req,res,next)=>{
    let doctor=null;
    try{
        doctor =await doctorModel.findByIdAndUpdate(req.params.id,{$set:req.body},{new:true});

        if(!doctor)
        {
            return  res.json({status:"failure",message:"error occured while updating the doctor"});  
        }
        return res.json({status:"success",message:"user updated successfully",data:doctor});
    }
   
    catch(error)
    {
        console.log(error);
        returnres.json({status:"failure",message:"error occured while updating the doctor"});
    }
}
// deleting the user
export const deleteDoctor=async(req,res,next)=>{
    const id=req.params.id;
    let doctor=null;
    try{
        doctor=await doctorModel.findByIdAndDelete({_id:id});
        if(!doctor)
        {
            return  res.json({status:"failure",message:"error occured while deleting the doctor"});  
        }
        return   res.json({status:"success",message:"user deleted successfully",data:doctor});
    }
   
    catch(error)
    {
        console.log(error);
        return  res.json({status:"failure",message:"error occured while deleting the doctor"});
    }
}