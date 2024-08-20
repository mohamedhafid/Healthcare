import mongoose from "mongoose";

const bookingSchema=new mongoose.Schema({
     doctor:{
        type:mongoose.Types.ObjectId,
        ref:"Doctor",
        required:true,
     },
     user:{
       type:mongoose.Types.ObjectId,
       ref:"User",
       required:true,
     },
     ticketPrice:{
       type:Number,
       required:true,
     }
});

const bookingModel=mongoose.model("booking",bookingSchema);

export default bookingModel;