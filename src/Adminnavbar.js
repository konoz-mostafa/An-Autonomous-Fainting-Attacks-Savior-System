import React from "react";
import { NavLink, useNavigate } from 'react-router-dom'; 
import anotherlogouticon from './anotherlogouticon.jpeg';
import './AssignPatient.css';

export default function Adminnavbar() {
  const navigate = useNavigate(); 

  const handleLogout = () => {
    navigate('/');
  };

  return (
    <div>
      <nav> 
        <div className='hospital' style={{ borderRadius: '10px' }}>
          <h1 style={{color:'azure'}}>Admin</h1>
        </div>
        <NavLink to="/admin/main" style={{ display: 'block', margin: '10px 0', fontSize:'30px'}}>Home</NavLink>
        <NavLink to="/admin/assign" style={{ display: 'block', margin: '10px 0' }}>Assign Patient</NavLink>
        <NavLink to="/admin/show" style={{ display: 'block', margin: '10px 0' }}>Show Patients on Map</NavLink>
        <NavLink to="/admin/manage" style={{ display: 'block', margin: '10px 0' }}>Hospital Management</NavLink>
        <NavLink to="/admin/hospital" style={{ display: 'block', margin: '10px 0' }}>View Hospitals on Map</NavLink>
      </nav>
      <button className='buttonStyle' onClick={handleLogout}>
        <img src={anotherlogouticon} alt="Icon" style={{ width: '60px', height: '60px' }} title='LOG_OUT' />
      </button>
    </div>
  );
}

