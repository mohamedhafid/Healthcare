import React from 'react';
import './Services.css';
import doctor_service from '../../assets/images/doctor-svg.avif';
import location from '../../assets/images/location.avif';
import appointment from '../../assets/images/appointment.avif';
import { FaArrowRight } from "react-icons/fa";

const Services = () => {
  return (
    <div className='services' id='Services'>
        <div className="services-content">
            <h1>Providing the best Medical Services</h1>
            <p>We are committed to delivering the highest standard of medical services to ensure your well-being and health</p>
        </div>
        <ul className='services-list'>
            <li>
                <img src={doctor_service} alt="" width='80px' height='80px'/>
                <h1>Find a Doctor</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit voluptate, aliquid temporibus molestias accusantium ullam. Esse ipsa ducimus dolore commodi.</p>
                <FaArrowRight className='arrow' size={30}/>
            </li>
            <li>
                <img src={location} alt="" width='80px' height='80px' />
                <h1>Find a Location</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit voluptate, aliquid temporibus molestias accusantium ullam. Esse ipsa ducimus dolore commodi.</p>
                <FaArrowRight className='arrow' size={30}/>
            </li>
            <li>
                <img src={appointment} alt="" width='80px' height='80px' />
                <h1>Book Appointment</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit voluptate, aliquid temporibus molestias accusantium ullam. Esse ipsa ducimus dolore commodi.</p>
                <FaArrowRight className='arrow' size={30}/>
            </li>
        </ul>
    </div>
  )
}

export default Services;