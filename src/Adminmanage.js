import React, { useState } from 'react';
import './Malak.css';
import Header from './header';
//import MapComponent from './MapComponent'; // استيراد مكون الخريطة

export default function Adminmanage() {
  const [hospitals, setHospitals] = useState([
    { id: 1, name: "Maadi Armed Forces Medical Complex", location: { lat: 29.960435, lng: 31.255691 } },
    { id: 2, name: "Nasser Institute Hospital", location: { lat: 30.078302, lng: 31.238104 } },
    { id: 3, name: "Wadi El Neel Hospital", location: { lat: 30.014765, lng: 31.212648 } },
    { id: 4, name: "International Medical Center", location: { lat: 30.142507, lng: 31.600668 } },
    { id: 5, name: "Dar El Fouad Hospital", location: { lat: 29.972739, lng: 30.957184 } },
    { id: 6, name: "Cleopatra Hospital", location: { lat: 30.089195, lng: 31.309475 } },
    { id: 7, name: "Al-Salam International Hospital", location: { lat: 29.964999, lng: 31.244400 } },
  ]);

  const [input, setInput] = useState({ name: "", lat: "", lng: "" });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setInput((prevInput) => ({
      ...prevInput,
      [name]: value,
    }));
  };

  const handleAddHospital = () => {
    if (!input.name || !input.lat || !input.lng) {
      alert("Please fill all fields before adding a hospital!");
      return;
    }
    const exists = hospitals.some(
      (hospital) =>
        parseFloat(hospital.location.lat) === parseFloat(input.lat) &&
        parseFloat(hospital.location.lng) === parseFloat(input.lng)
    );

    if (exists) {
      alert("A hospital already exists at this location!");
      return;
    }

    const nextId = hospitals.length ? hospitals[hospitals.length - 1].id + 1 : 1;

    setHospitals((prevHospitals) => [
      ...prevHospitals,
      {
        id: nextId,
        name: input.name,
        location: { lat: parseFloat(input.lat), lng: parseFloat(input.lng) },
      },
    ]);
    setInput({ name: "", lat: "", lng: "" });
  };

  const handleDeleteHospital = (id) => {
    setHospitals((prevHospitals) => prevHospitals.filter((hospital) => hospital.id !== id));
  };

  return (
    <div style={{ justifyContent: "center", justifyItems: "center" }}>
      <div className="headtext">
        <Header title="Hospitals Management" />
      </div>
      <br />
      <div className="container">
        <ul>
          {hospitals.map((hospital) => (
            <li key={hospital.id} className="hospitals">
              {hospital.name}
              <button
                className="button"
                onClick={() => handleDeleteHospital(hospital.id)}
              >
                Delete
              </button>
            </li>
          ))}
        </ul>
      </div>
      <div className="conInput">
        <label style={{ fontSize: "28px", color: "#176b87" }}>Enter hospital information:</label>
        <br />
        <input
          name="name"
          placeholder="Enter the hospital name"
          value={input.name}
          onChange={handleInputChange}
        />
        <input
          name="lng"
          placeholder="Enter the longitude of the hospital location"
          value={input.lng}
          onChange={handleInputChange}
        />
        <input
          name="lat"
          placeholder="Enter the latitude of the hospital location"
          value={input.lat}
          onChange={handleInputChange}
        />
        <button
          id="addh"
          className="buttonfun"
          onClick={handleAddHospital}
        >
          Add
        </button>
      </div>
     
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      
            </div> 
  );
}