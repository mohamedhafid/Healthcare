import mongoose from "mongoose";

const DoctorSchema=new mongoose.Schema({
    email:{type:String,required:true,unique:true},
    password:{type:String,require:true},
    name:{type:String,required:true},
    // phone:{type:String,required:true},
    profile:{type:String,required:false},
    price:{type:String,required:false},
    role:{type:String},

    specification:{type:String},
    about:{type:String},

    appointment:[{type:mongoose.Types.ObjectId,ref:"Appointment"}]
});

const doctorModel=mongoose.model("doctor",DoctorSchema);

export default doctorModel;