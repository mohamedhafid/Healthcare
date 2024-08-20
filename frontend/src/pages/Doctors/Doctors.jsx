import React from 'react';
import './Doctors.css';
import DoctorList from '../../components/DoctorList/DoctorList.jsx';

const Doctors = () => {
  let doctors=null;

  useEffect(()=>{
    async  function getDoctors()
    {
         doctors=await axios.post('http://localhost/doctor')
    }
  },[])
  return (
    <div className='doctors'>
        <div className="doctors-content">
        <div className="doctors-find">
            <input type="text" placeholder="Find a Doctor" />
            <button>Find</button>
        </div>
       
        </div>
        <div className="doctors-list">
            <h1 style={{textAlign:'center'}}>Doctors</h1>
            <hr />
        <div className="doctors-list-data">

            {
               doctors.map((doctor,index)=>{
                  return(
                        <DoctorList key={index} doctor_id={doctor.id} name={doctor.name} profile={doctor.profile} speciality={doctor.speciality} location={doctor.location} hospital={doctor.hospital}/>  
                  )
               })
            }
                     </div>

        </div>
    </div>
  )
}

export default Doctors