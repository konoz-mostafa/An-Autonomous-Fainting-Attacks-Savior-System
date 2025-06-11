import React, { useState, useEffect } from "react";
import {
  GoogleMap,
  Marker,
  InfoWindow,
  useJsApiLoader,
} from "@react-google-maps/api";

const containerStyle = {
  width: "100%",
  height: "500px",
};

const center = {
  lat: 30.0544,
  lng: 31.3468,
};

const HospitalMap = () => {
  const [currentDateTime, setCurrentDateTime] = useState(new Date());
  const [selectedHospital, setSelectedHospital] = useState(null);
  const [hospitals, setHospitals] = useState([]);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentDateTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    // Fetch data from REST API
    const fetchHospitalLocations = async () => {
      try {
        const response = await fetch(""); // Replace with your API URL
        if (!response.ok) {
          throw new Error("Failed to fetch hospital locations");
        }
        const data = await response.json();
        setHospitals(data); // Assuming API returns an array of hospital objects
      } catch (error) {
        console.error("Error fetching hospital locations:", error);
      }
    };

    fetchHospitalLocations();
  }, []);

  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: "AIzaSyBhTdEUux9PdxqrzxkO9xRUMltDWIFHkSs",
  });

  if (!isLoaded) {
    return <div>Loading Map...</div>;
  }

  return (
    <div style={{ textAlign: "center", fontFamily: "Arial, sans-serif" }}>
      <h1 style={{ color: "#176b87" }}>Hospital Location Map</h1>

      <div style={{ marginBottom: "20px", fontSize: "18px", color: "#176b87" }}>
        <strong>Date:</strong> {currentDateTime.toLocaleDateString()} <br />
        <strong>Time:</strong> {currentDateTime.toLocaleTimeString()}
      </div>

      <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={10}>
        {hospitals.map((hospital) => (
          <Marker
            key={hospital.id}
            position={hospital.location}
            onClick={() => setSelectedHospital(hospital)}
          />
        ))}

        {selectedHospital && (
          <InfoWindow
            position={selectedHospital.location}
            onCloseClick={() => setSelectedHospital(null)}
          >
            <div>
              <h4>{selectedHospital.name}</h4>
            </div>
          </InfoWindow>
        )}
      </GoogleMap>
    </div>
  );
};

export default HospitalMap;
