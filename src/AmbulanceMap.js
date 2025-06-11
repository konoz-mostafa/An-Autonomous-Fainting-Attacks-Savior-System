import React, { useState, useEffect } from "react";
import {
  GoogleMap,
  Marker,
  InfoWindow,
  useJsApiLoader,
} from "@react-google-maps/api";

// Define map container style
const containerStyle = {
  width: "100%",
  height: "500px",
};

// Center of the map
const center = {
  lat: 30.0544, 
  lng: 31.3468, 
};

const AmbulanceMap = () => {
  const [currentDateTime, setCurrentDateTime] = useState(new Date());
  const [selectedAmbulance, setSelectedAmbulance] = useState(null);

  // Update the current date and time every second
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentDateTime(new Date());
    }, 1000);

    return () => clearInterval(timer); // Cleanup interval on component unmount
  }, []);

  // Ambulance locations
  const ambulances = [
    { id: 1, location: { lat: 30.1086, lng: 31.6132 }, name: "Ambulance 1 (Al Shorouk)" },
    { id: 2, location: { lat: 30.0544, lng: 31.3468 }, name: "Ambulance 2 (Madinat Nasr)" },
    { id: 3, location: { lat: 30.0982, lng: 31.3315 }, name: "Ambulance 3 (El Nozha)" },
    { id: 4, location: { lat: 31.2089, lng: 29.9237 }, name: "Ambulance 4 (Somoha)" },
    { id: 5, location: { lat: 24.0889, lng: 32.8998 }, name: "Ambulance 5 (El Nuba)" },
  ];


  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: "AIzaSyBhTdEUux9PdxqrzxkO9xRUMltDWIFHkSs", 
  });

  if (!isLoaded) {
    return <div>Loading Map...</div>;
  }

  return (
    <div style={{ textAlign: "center", fontFamily: "Arial, sans-serif" }}>
      <h1 style={{ color:"#176b87" }}>Ambulance Location Map</h1>

      {/* Display current date and time */}
      <div  style={{ marginBottom: "20px", fontSize: "18px", color:"#176b87"}}>
        <strong>Date:</strong> {currentDateTime.toLocaleDateString()} <br />
        <strong>Time:</strong> {currentDateTime.toLocaleTimeString()}
      </div>

      {/* Google Map */}
      <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={10}>
        {ambulances.map((ambulance) => (
          <Marker
            key={ambulance.id}
            position={ambulance.location}
            onClick={() => setSelectedAmbulance(ambulance)}
          />
        ))}

        {/* Info Window for selected ambulance */}
        {selectedAmbulance && (
          <InfoWindow
            position={selectedAmbulance.location}
            onCloseClick={() => setSelectedAmbulance(null)}
          >
            <div>
              <h4>{selectedAmbulance.name}</h4>
            </div>
          </InfoWindow>
        )}
      </GoogleMap>
    </div>
  );
};

export default AmbulanceMap;