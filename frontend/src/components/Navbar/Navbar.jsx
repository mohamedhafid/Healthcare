import React, { useContext, useState } from 'react';
import './Navbar.css';
import logo from '../../assets/images/logo.jpeg';
import {Link} from 'react-router-dom'
import { AuthContext } from '../../context/AuthContext';

const Navbar = () => {
  // active class
  const [isActive,setActive]=useState('Home');
  const {token,user,role}=useContext(AuthContext);

  const logout=()=>{
    localStorage.removeItem('token');
  }

  console.log("token is",token);
  return (
    <div className='navbar'>
        <div className='nav-logo'>
      <Link to='/'>
           <img src={logo} alt="logo" width='40px' height='40px' style={{borderRadius:"50%"}}/>
      </Link>

           <h1>Heal <span>Care</span></h1>
        </div>
        <div className="nav-links">
       
              <a href='#Hero' onClick={()=>setActive('Home')} className={isActive=='Home'?'active':''}>Home</a>
              <a href='#About' onClick={()=>setActive('About')} className={isActive=='About'?'active':''}>About</a>
              <a href='#Services' onClick={()=>setActive('Service')} className={isActive=='Service'?'active':''}>Service</a>
              <a href='#Testimonials' onClick={()=>setActive('Testimonials')} className={isActive=='Testimonials'?'active':''}>Testimonials</a>
              <a href='#Contacts' onClick={()=>setActive('Contact Us')} className={isActive=='Contact Us'?'active':''}>Contact Us</a>
           
        </div>

        <div className="nav-button">
         {
           localStorage.getItem('token')!=null ?
          <Link to={`${role=='doctor'?'doctor/profile':'user/profile'}`}>
           <img  src={user.profile} alt="" style={{width:'40px',height:'40px',borderRadius:'50%'}}/>
             
          </Link>
           :
         <Link to='/login'>

           <button>Login</button>
         </Link>
          
         }
         {/* <button onClick={logout}>
           Logout
         </button> */}
            
        </div>

    </div>
  )
}

export default Navbar;