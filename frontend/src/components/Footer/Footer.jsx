import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <div className='Footer' id='footer'>
       <div className="footer-content">
           <div className="footer-features">
               <h1>What you can do with as!</h1>
               <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis, ratione, architecto, soluta maxime nesciunt rerum veritatis optio odit dolores reiciendis fugit corrupti nisi et minima eos placeat. Debitis, ex consequuntur.</p>
           </div>
           <ul>
            <h2>UseFul links</h2>
              <li>Home</li>
              <li>About</li>
              <li>Services</li>
              <li>Contact Us</li>
           </ul>
           <div className="footer-email" style={{textAlign:'center'}}>
               <h3>healcare.org@gmail.com</h3>
               <p>044-3456778</p>
           </div>
       </div>
       <h2 style={{textAlign:"center",color:"var(--primary)"}}>CopyRight@2024-All Rights Reserved</h2>
    </div>
  )
}

export default Footer