import React, { useState,useContext } from 'react';
import './Login.css';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../context/AuthContext';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import axios from 'axios';

const Login = () => {
  // getting form input
  const [loading,setLoading]=useState(false);
  const {dispatch,image,setImage,user}=useContext(AuthContext);

  const navigate=useNavigate();

  const [form,setForm]=useState([{
     email:'',
     password:''
  }]);
  // form action
  const handleChange=(event)=>{
     const name=event.target.name;
     const value=event.target.value;
     setForm({...form,[name]:value});
  }

  const handleSubmit=async(e)=>{
    e.preventDefault();
    setLoading(true);


    try{
       let  res=await axios.post(`http://localhost:8000/auth/login`,form);

       if(res.data.status=="failure")
       {
          toast("invalid credentials");
          return 
       }

       dispatch({
        type:"LOGIN_SUCCESS",
        payload:{
          token:res.data.token,
          user:res.data.data,
          role:res.data.role,
        }
       });
       console.log(res.data.data);
       setLoading(false);
       toast.success("user logged in successfully");
       navigate('/');
    }
    catch(error)
    {

      toast.error(error.message);
      setLoading(false);
    }
  }


  return (
    <div className='login'>
      <div className="login-content">
        <h3>Hello <span>Welcome</span>  Back </h3>
        <form action="" onSubmit={handleSubmit}>
            <input type="email" placeholder="Enter your Email:" name='email'onChange={handleChange} required />
            <input type="password" placeholder="Enter your Password:" name='password' onChange={handleChange} required />
            <button type="submit">Login</button>
            <p>Don't have an acccount <Link to='/register'>Register</Link></p>
        </form>
        </div>
    </div>
  )

}

export default Login;