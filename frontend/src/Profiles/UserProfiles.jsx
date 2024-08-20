import React, { useContext } from 'react';
import { AuthContext } from '../context/AuthContext';
import './UserProfiles.css';


const UserProfiles = () => {
  const {token,user,role}=useContext(AuthContext);

  return (
    <div className="user-profile">
        <div className="user-details">
        <img  src={user.profile} alt="" />
        <h1>{user.name}</h1>
        <p>{user.email}</p>
        <button onClick={()=>localStorage.removeItem('token')}>Logout</button>
        </div>
        <div className="user-profile-details">
            <button>My Bookings</button>
        </div>
    </div>
  )
}

export default UserProfiles