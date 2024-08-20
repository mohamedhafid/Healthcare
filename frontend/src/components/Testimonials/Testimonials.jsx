import React from 'react';
import './Testimonials.css';
import prof1 from '../../assets/images/prof1.jpeg';
import prof2 from '../../assets/images/prof2.jpeg';
import prof3 from '../../assets/images/prof3.jpeg';


const Testimonials = () => {
  return (
    <div className='testimonials' id='Testimonials'>
        <div className="testimonials-content">
            <h1>Let's know what others think of us!</h1>
            <p>This is what we are doing Right know</p>
        </div>
        <div className="testimonials-container">
              <div className="testimonials-card">
                  <img src={prof1} alt="" />
              </div>
              <div className="testimonials-card">
              <img src={prof2} alt="" />

              </div>
              <div className="testimonials-card">
              <img src={prof3} alt="" />

              </div>
        </div>
    </div>
  )
}

export default Testimonials;