import userModel from '../models/UserSchema.js';
import doctorModel from '../models/DoctorSchema.js';
import bookingModel from '../models/BookingSchema.js';
import Stripe from 'stripe';


export const getCheckOutSession=async(req,res)=>{

      console.log(req.params.doctorId)
    try{
     const doctor=doctorModel.findById(req.params.doctorId);
     const user=userModel.findById(req.userId);
     const stripe=new Stripe('sk_test_51PpsSeFsMYuC8wdexqGpAw3E9pXhbTriXlBTJozCARsgX7Io1ha7vjZCtdw7o6nivhuUN0jNsL4TvVCBLK5X64k800SC9229G1')
     console.log(doctor._doc);
     const session=await stripe.checkout.sessions.create({
        payment_method_types: ['card'],
        mode:'payment',
        success_url:'http://localhost:5173/checkout',
        cancel_url:'http://localhost:5173/failure',
        customer_email:user.email,
        line_items:[
            {
                price_data:{
                    currency:'INR',
                    unit_amount:300,
                    product_data:{
                        name:doctor.name,
                        images:[doctor.profile]
                    }
                },
                quantity:1
            }
        ]
     })

     const booking=new bookingModel({
        doctor:doctor._id,
        user:user._id,
        ticketPrice:doctor.ticketPrice,

     });

     await booking.save();

     return res.json({status:"success",message:"successfully paid",session});
     
    }
    catch(error)
    {
        return res.json({status:"error",message:error.message});
        console.log(error);
    }
}
