import React from 'react';
import './About.css';
import doctor from '../../assets/images/doctor.jpg';

const About = () => {
  return (
    <div className='about' id='About'>
        <div className="about-content">
            <h1>We are the best Medical Resource</h1>
             <p>We are committed to delivering the highest standard of medical services to ensure your well-being and health.</p>
        </div>
        <div className="about-predicate">
            <img src={doctor} alt="" />
            <ul id='accordion'>
                 <li className="accord" >
                    <label htmlFor="first">What we Provide<span>&#x3e;</span></label>
                    <input type="radio" id="first" name="accordion" checked  />
                    <div className="content">
                      <p>We offer seamless video calling support and easy online appointment scheduling with qualified doctors. Our platform allows you to consult with healthcare professionals from the comfort of your home, ensuring convenient and timely medical care tailored to your needs. Whether you need a routine check-up or specialized advice, our virtual services are designed to make your healthcare experience as accessible and efficient as possible.</p>
                    </div>
                 </li>
                 <li className="accord">
                    <label htmlFor="second">Who can get<span>&#x3e;</span></label>
                    <input type="radio" id="second" name="accordion" />
                    <div className="content">
                      <p>Our video calling and online appointment services are available to everyone. Whether you’re seeking routine check-ups, specialist consultations, or follow-up care, our platform is designed to accommodate all individuals. From busy professionals and parents to elderly patients and those with mobility issues, anyone can benefit from the convenience, accessibility, and personalized care offered through our innovative virtual health services.</p>
                    </div>
                 </li>
                 <li className="accord">
                    <label htmlFor="third">What are the benefits<span>&#x3e;</span></label>
                    <input type="radio" id="third" name="accordion" />
                    <div className="content">
                      <p>This convenience allows for personalized medical care and efficient health management for everyone in the household. By scheduling virtual consultations, you can avoid multiple trips to the doctor's office and seamlessly address each individual’s health needs. Enjoy the flexibility and accessibility of comprehensive care tailored to your family’s unique requirements.</p>
                    </div>
                 </li>
            </ul>
        </div>
    </div>
  )
}

export default About;