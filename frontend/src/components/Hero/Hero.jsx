import React from 'react';
import './Hero.css';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <div className='hero' id='Hero'>
        <div className="hero-content">
           <h1>We Provide Solution for your <span style={{fontSize:'3rem'}} className='hero-health'>Health</span></h1>
           <p>To enhance your health care experience, we offer convenient video calling and online appointment scheduling with the best-suited doctors. This enables you to consult with specialists from the comfort of your home, ensuring timely and personalized medical advice. Experience seamless health management through our innovative digital platform.</p>
           <div className="hero-buttons">
            <Link to='/doctors'>
              <button className='doctor-button'>Find Doctors</button>
            </Link>
              <button className='explore-button'><a href="#About" style={{color:'white'}}>Explore More</a></button>
           </div>
        </div>
    </div>
  )
}

export default Hero