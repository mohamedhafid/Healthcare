import mongoose from "mongoose";

const UserSchema=mongoose.Schema({

    name:{type:String,required:true},
    email:{type:String,required:true,unique:true},
    password:{type:String,required:true},
    profile:{type:String,required:true},
    role:{type:String,required:true},
    appointment:[{type:mongoose.Types.ObjectId,ref:"Appointment"}]

});

const userModel=mongoose.model("user",UserSchema);

export default userModel;