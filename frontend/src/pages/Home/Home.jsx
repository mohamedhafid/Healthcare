import React from 'react';
import './Home.css';
import Hero from '../../components/Hero/Hero';
import About from '../../components/About/About';
import Services from '../../components/Services/Services';
import Testimonials from '../../components/Testimonials/Testimonials';
import Contacts from '../../components/Contacts/Contacts';
import Footer from '../../components/Footer/Footer';

const Home = () => {
  return (
    <div>
        <Hero/>
        <About/>
        <Services/>
        <Testimonials/>
        <Contacts/>
    </div>
  )
}

export default Home