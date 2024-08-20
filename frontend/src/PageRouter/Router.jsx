import React from 'react';
import Login from '../pages/Login/Login';
import {Routes,Route} from 'react-router-dom';
import Home from '../pages/Home/Home';
import Register from '../pages/Register/Register';
import Doctors from '../pages/Doctors/Doctors';
import UserProfiles from '../Profiles/UserProfiles';
import DoctorDetails from '../pages/DoctorDetails/DoctorDetails'
import DoctorProfiles from '../Profiles/DoctorProfiles';
import Success from '../Success';
import Failure from '../Failure';

const Router = () => {
  return (
    <>
      <Routes>
         <Route path='/' element={<Home/>}/>
         <Route path='/home' element={<Home/>}/>
         <Route path='/login' element={<Login/>}/>
         <Route path='/register' element={<Register/>}/>
         <Route path='/doctors' element={<Doctors/>}/>
         <Route path="/doctorsdetails" element={<DoctorDetails/>}>
           <Route path=":doctor_id" element={<Doctors/>} />
        </Route>
        <Route path='/user/profile' element={<UserProfiles/>}/>
        <Route path='/doctor/profile' element={<DoctorProfiles/>}/>
        <Route path='/success' element={<Success/>}/>
        <Route path='/failure' element={<Failure/>}/>

      </Routes>
    </>
  )
}

export default Router