import userModel from '../models/UserSchema.js';
// getting the single user
export const getSingleUser=async(req,res,next)=>{
    const id=req.params.id;
    let user=null;
    try{
        user =await userModel.find({_id:id});

        if(!user)
        {
            return  res.json({status:"failure",message:"user doesn't exist"});  
        }
        return   res.json({status:"success",message:"the user is retreived successfully",data:user});
    }
   
    catch(error)
    {
        console.log(error);
        return res.json({status:"failure",message:"Can't able to get the user"});
    }
}
// getting the multiple user
export const getAllUser=async(req,res,next)=>{
    let user=null;
    try{
        user =await userModel.find({});

        if(!user)
        {
            return res.json({status:"failure",message:"user doesn't exist"});  
        }
        return  res.json({status:"success",message:"the user is retreived successfully",data:user});
    }
   
    catch(error)
    {
        console.log(error);
        return  res.json({status:"failure",message:"Can't able to get the user"});
    }
}
//updating the user
export const updateUser=async(req,res,next)=>{
    let user=null;
    try{
        user =await userModel.findByIdAndUpdate(req.params.id,{$set:req.body},{new:true});

        if(!user)
        {
            return res.json({status:"failure",message:"error occured while updating the user"});  
        }
        return res.json({status:"success",message:"user updated successfully",data:user});
    }
   
    catch(error)
    {
        console.log(error);
        return  res.json({status:"failure",message:"error occured while updating the user"});
    }
}
// deleting the user
export const deleteUser=async(req,res,next)=>{
    const id=req.params.id;
    let user=null;
    try{
        user=await userModel.findByIdAndDelete({_id:id});
        if(!user)
        {
            return  res.json({status:"failure",message:"error occured while deleting the user"});  
        }
        return  res.json({status:"success",message:"user deleted successfully",data:user});
    }
   
    catch(error)
    {
        console.log(error);
        return  res.json({status:"failure",message:"error occured while deleting the user"});
    }
}

// getting the user profile
export const getUserProfile=async(req,res,next)=>{
    let user=null;
    try{
        user=userModel.findById(req.userId);

        if(!user)
        {
            return  res.json({status:"failure",message:"error occured while deleting the user"});  

        }
        const {password,...rest}=user._doc;
        return res.json({status:"success",message:"user profile fetched successfully",data:{...rest}});

    }
    catch(error)
    {
        console.log(error);
        return  res.json({status:"failure",message:"error occured while deleting the user"});
    }
}

// getting the appointments
export const getAppointment=async(req,res,next)=>{

   try{

   }catch(error)
   {
    console.log(error);
    return  res.json({status:"failure",message:"error occured while deleting the user"});
   }
}