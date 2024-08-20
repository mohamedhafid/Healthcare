import React from 'react';
import './DoctorDetails.css';
import {useParams} from 'react-router-dom';
import { doctors } from '../../assets/data';
import { FaStar } from "react-icons/fa";
import axios from 'axios';

const DoctorDetails = () => {
    const {doctor_id}=useParams();
    console.log(doctor_id);
    const doctor=doctors.find((doctor)=>Number(doctor.id==doctor_id));
    console.log(doctor);

    const handleClick=async()=>{
      console.log("inside the handle clcik");
      try{
        const res=await axios.post(`http://localhost:8000/bookings/checkout/${doctor_id}`);
       console.log("this is the result",res);
       
        if(res.data.status=="failure")
        {
          throw new Error(res.statusText);
        }
     }
     catch(error)
     {
       console.log(error);
     }
    }
  return (
    <div className='details'>
        <div className="details-content">
            <div className="details-info">
              <div className="price">
                <img src={doctor.profile} alt="" />
                <div className="price-content">
                    <h1>Price: <span>500$</span></h1>
                    <button style={{color:"orange",margin:'10px 0px'}} onClick={handleClick}>Book Appointment</button>

                    
                </div>
                
                </div>
                
                <div className="details-p-info">
                  <div className="details-personal">
                   <h1 style={{color:'black'}}>{doctor.name}</h1>
                   <h1 style={{background:'orange',padding:'10px',borderRadius:'10px'}}>{doctor.speciality}</h1>
                   </div>
                <hr />
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Est animi, architecto nisi accusamus, at recusandae similique, quod perferendis id tempore suscipit minima fuga nulla officia itaque provident magnam quisquam explicabo!</p>
            <h1>+1200 patients are Recovered</h1>
             <p>Rating: <FaStar className='star'/><FaStar className='star'/><FaStar className='star'/></p>
                </div>
          <div className="feedback">
            <textarea name="feedback" id="feedback" rows={3} placeholder='Give your Feedback here!'></textarea>
            <button>Submit</button>
        </div>
            </div>
          
        </div>
       
       
    </div>
  )
}

export default DoctorDetails