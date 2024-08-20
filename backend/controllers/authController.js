import doctorModel from "../models/DoctorSchema.js";
import userModel from "../models/UserSchema.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt"

const generateToken=(user)=>{

   return jwt.sign({id:user._id,role:user.role},"f2e69c06-4e08-4da8-b9f8-1a99cd108bd6");
     
}
export const register=async (req,res)=>{
    const {name,email,password,role,gender,profile}=req.body;

    try{
         let user=null;

         if(role=='patient')
         {
            user=await userModel.find({email});
         }
         else if(role=='doctor')
         {
            user=await doctorModel.find({email});

         }
        //  if the user already exist in the database;
        //  if(user)
        //  {
        //     res.json({status:"failure",message:"User Already exists"})
        //     return ;
        //  }

        //  hashing the password
        const salt=await bcrypt.genSalt(10);
        const hashedPassword=await bcrypt.hash(password,salt);

        // creating the user
        let newUser=null;

        if(role=='patient')
        {
            newUser=new userModel({
                email,
                password:hashedPassword,
                name,
                gender,
                profile,
                role,
            });
        }
        if(role=='doctor')
        {
            newUser=new doctorModel({
                email,
                password:hashedPassword,
                name,
                gender,
                profile,
                role,
            });
        }

        await newUser.save();

       return  res.json({status:"success",message:"user Created successfully"});



    }
    catch(error)
    {
      console.log(error);
     return  res.json({status:"failure",message:"Error occured while registering the user"});
    }

}

export const login=async(req,res)=>{
   
  const{email,password}=req.body;

   let user=null;

   try{
         let patient=await userModel.findOne({email});
         let doctor=await doctorModel.findOne({email});

       


        if(patient)
        {
            user=patient;

        }
        else{
            user=doctor;
        }

        if(!user)
        {
           return  res.json({status:"failure",message:"user not exist"});
        }
        console.log(req.body.password,user.password)
        const check_password=await bcrypt.compare(req.body.password,user.password);
        console.log(check_password);
        if(!check_password)
        {
            return res.json({status:"failure",message:"Invalid password"});
        }
        console.log("check password is ",check_password);
        const token=generateToken(user);

        const {password,role,...rest}=user._doc;

       

        return res.json({status:"success",message:"user login successfully",token,data:{...rest},role});
   }catch(error)
   {
    console.log(error);
    return res.json({status:"failure",message:"Error occured while logging the user"});
   }
}



