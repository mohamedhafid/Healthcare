import React from 'react';
import './DoctorList.css';
import { FaArrowRight } from "react-icons/fa";
import {Link} from 'react-router-dom';
import { FaSearchLocation } from "react-icons/fa";


const DoctorList = ({doctor_id,name,speciality,location,hospital,profile}) => {
  return (
    <div className='doctorlist'>
        <Link to={`/doctorsdetails/${doctor_id}`}>

            <img src={profile} alt="" />
        </Link>

        <div className="doctor-details">
           <h1>{name}</h1>
           <p className="speciality">{speciality}</p>

        </div>
        <div className="doctor-location">
        <div className="doctor-hostpital" style={{textAlign:'center'}}>
          <p>{hospital}</p>
          <p style={{fontWeight:'bold'}}> <FaSearchLocation style={{marginRight:'10px'}}/>Location:{location}</p>

        </div>

         
        </div>
        



    </div>
  )
}

export default DoctorList