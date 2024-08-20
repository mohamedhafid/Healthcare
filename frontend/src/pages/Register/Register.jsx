import React, { useContext, useState } from 'react';
import './Register.css';
import user from '../../assets/images/user.jpg';
import {Link, useNavigate} from 'react-router-dom';
import Cloudinary from '../../utils/Cloudinary';
import {toast} from "react-toastify";
import {HashLoader} from "react-spinners";
import axios from "axios";
import { AuthContext } from '../../context/AuthContext';

const Register = () => {
  // changing image
  const [loading,setLoading]=useState(false);
  const [previewUrl,SetPreviewUrl]=useState(null);
  const {image,setImage}=useContext(AuthContext);

  const navigate=useNavigate();
  const [form,setForm]=useState([{
    name:'',
    email:'',
    password:'',
    role:'',
    gender:'',
    profile:''
  }]);
// getting the file input
const handleFileChange=async(e)=>{
    const file=e.target.files[0];

    const data=await Cloudinary(file);

    SetPreviewUrl(data.url);
    setImage(data.url);
    setForm({...form,profile:data.url});

    

}

  // getting the input values from the input
  const handleChange=(event)=>{
     const name=event.target.name;
     const value=event.target.value;
     setForm({...form,[name]:value});

  }
  // submitting the form
  const handleSubmit=async(e)=>{
    console.log(form);
    e.preventDefault();
    //passing it to the backend
    
    try{
       const res=await axios.post(`http://localhost:8000/auth/register`,form);

       if(res.data.status=="failure")
       {
         throw new Error(res.statusText);
       }

       setLoading(false);
       toast.success("user registered successfully");
       navigate('/login');
    }
    catch(error)
    {
      console.log(error);
      toast.error(error.message);
      setLoading(false);
    }
  }
  return (
    <div className='register'>
         <div className="register-content">
            <div className="left">
                <img src={user} alt="" />
            </div>
            <div className="right">
              <div className="right-file">
                 <h1>Create an <span>Account</span></h1>
                 
                
              </div>
                <form action="" onSubmit={handleSubmit}>
                <div style={{display:"flex",alignItems:"center"}}>
                <div className="right-file">
                 <img src={image ? image :empty} alt="" width="50px" height="50px" style={{borderRadius:"50%"}}/>
                 <label htmlFor="photo" className='photo'>Upload profile</label>
                 <input type="file" accept='jpg png' name="photo" id="photo" onChange={handleFileChange} required/>

                 </div>
                 </div>
          

                   <input type="text"  placeholder="Full name:" name="name" onChange={handleChange}/>
                   <input type="email" placeholder="Enter Your Email:" name="email" onChange={handleChange}/>
                   <input type="password" placeholder="Enter your password:" name="password"  onChange={handleChange} />
                   <div className="register-selection">
                   <div className="selection">
                   <label htmlFor="role">Are you a:</label>
                   <select  id="role" name="role" onChange={handleChange} >
                     <option value="none"  >Select an Option</option>
                     <option value="doctor" >Doctor</option>
                     <option value="patient">Patient</option>
                   </select>
                   </div>
                   <div className="selection">
                   <label htmlFor="role">Gender:</label>
                   <select  id="gender"  name="gender" onChange={handleChange}  >
                      <option value="none"   >Select an Option</option>
                     <option value="male">Male</option>
                     <option value="female">Female</option>
                   </select>
                   </div>
                   </div>
                  <button type="submit">{loading ? <HashLoader size={35} color="white" />:'Create Account'}</button>
                </form>
                <p>Already have an account <Link to="/login">Login</Link></p>
            </div>
         </div>
    </div>
  )
}

export default Register