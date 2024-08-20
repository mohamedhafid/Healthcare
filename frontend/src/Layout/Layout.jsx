import React from 'react';
import Navbar from '../components/Navbar/Navbar.jsx';
import Footer from '../components/Footer/Footer';
import Router from '../PageRouter/Router';
import Home from '../pages/Home/Home';


const Layout = () => {
  return (
    <>
      <Navbar/>
      <Router/>
      <Footer/>
    </>
  )
}

export default Layout