import React from 'react';
import './Contacts.css';

const Contacts = () => {
  return (
    <div className="contacts" id='Contacts'>
        <div className="contacts-content">
        <h1>Contact Us</h1>
        <form action="" className="contact-form">
              <div className="name">
                 <input type="text" placeholder="FirstName" />
                 <input type="text" placeholder="LastName" />
              </div>
              <input type="email" placeholder="Email" />
              <textarea name="description" id="description" rows={10}>
                 Write your queries here!
              </textarea>
              <button>Submit</button>
        </form>
        </div>
    </div>
  )
}

export default Contacts;