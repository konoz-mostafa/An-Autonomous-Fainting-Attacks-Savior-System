import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom'; 
import anotherlogouticon from './anotherlogouticon.jpeg';
import './AssignPatient.css';

export default function Hospitalnavbsr() {
  const navigate = useNavigate(); 
  const handleLogout = () => {
    navigate('/'); 
  };

  return (
    <div>
      <nav> 
        <div className='hospital' style={{ borderRadius: '10px' }}>
          <h1 style={{color:'azure'}}>Hospital 🏥</h1>
        </div>
        <NavLink to="/hospital/home" style={{ display: 'block', margin: '10px 0', fontSize:'30px'}}>Home</NavLink>
        <NavLink to="/hospital/assign" style={{ display: 'block', margin: '10px 0' }}>Assign Patient</NavLink>
        <NavLink to="/hospital/see" style={{ display: 'block', margin: '10px 0' }}>Show Ambulances on Map</NavLink>
        <NavLink to="/hospital/select" style={{ display: 'block', margin: '10px 0' }}>Select and Chat with Ambulance</NavLink>
        <NavLink to="/hospital/reports" style={{ display: 'block', margin: '10px 0' }}>All Patients' Reports</NavLink>
      </nav>
      <button className='buttonStyle' onClick={handleLogout}>
        <img src={anotherlogouticon} alt="Icon" style={{ width: '60px', height: '60px' }} title='LOG_OUT' />
      </button>
    </div>
  );
}


