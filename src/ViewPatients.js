// import { useState, useEffect } from "react";
// import {
//   GoogleMap,
//   Marker,
//   InfoWindow,
//   useJsApiLoader,
// } from "@react-google-maps/api";

// const containerStyle = {
//     width: "100%",
//   height: "500px",
//   };
// const center = {
//     lat: 30.0544, // Latitude of Madinat Nasr (as an example)
//     lng: 31.3468, // Longitude of Madinat Nasr
//   };



// export default function ViewPatients(){
//     const [currentDateTime, setCurrentDateTime] = useState(new Date());
//     const [selectedPatient, setSelectedPatient] = useState(null);
//     const [patients, setPatients] = useState([]);

//     useEffect(() => {
//         fetch("") //replace with api
//         .then((response) => response.json())
//         .then((data) => setPatients(data))
//         .catch((error) => console.error("Error fetching patients:", error));
//      }, []);

    


    
//     useEffect(() => {
//         const timer = setInterval(() => {
//           setCurrentDateTime(new Date());
//         }, 1000);
    
//         return () => clearInterval(timer); // Cleanup interval on component unmount
//       }, []);
    
    
//       const { isLoaded } = useJsApiLoader({
//         googleMapsApiKey: "AIzaSyBhTdEUux9PdxqrzxkO9xRUMltDWIFHkSs", // Replace with  API key
//       });
    
//       if (!isLoaded) {
//         return <div>Loading Map...</div>;
//       }
    
//     return(
//         <div style={{ textAlign: "center", fontFamily: "Arial, sans-serif" }}>
//         <h1 style={{ color:"#176b87" }}>patients Location Map</h1>
  
//         {/* Display current date and time */}
//         <div  style={{ marginBottom: "20px", fontSize: "18px", color:"#176b87"}}>
//           <strong>Date:</strong> {currentDateTime.toLocaleDateString()} <br />
//           <strong>Time:</strong> {currentDateTime.toLocaleTimeString()}
//         </div>
  
//         {/* Google Map */}
//         <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={10}>
//           {patients.map((Patient) => (
//             <Marker
//               key={Patient.id}
//               position={Patient.location}
//               onClick={() => setSelectedPatient(Patient)}
//             />
//           ))}
  
//           {/* Info Window for selected patient */}
//           {selectedPatient && (
//             <InfoWindow
//               position={selectedPatient.location}
//               onCloseClick={() => setSelectedPatient(null)}
//             >
//               <div>
//                 <h4>{selectedPatient.name}</h4>
//               </div>
//             </InfoWindow>
//           )}
//         </GoogleMap>
//       </div>
//     )

// }


import { useState, useEffect } from "react";
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
  lat: 30.0544, // Latitude of Madinat Nasr (as an example)
  lng: 31.3468, // Longitude of Madinat Nasr
};

export default function ViewPatients() {
  const [currentDateTime, setCurrentDateTime] = useState(new Date());
  const [selectedPatient, setSelectedPatient] = useState(null);
  const [patients, setPatients] = useState([]);

  useEffect(() => {
    fetch("") // Replace with actual API URL
      .then((response) => response.json())
      .then((data) => setPatients(Array.isArray(data) ? data : []))
      .catch((error) => console.error("Error fetching patients:", error));
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentDateTime(new Date());
    }, 1000);

    return () => clearInterval(timer); // Cleanup interval on component unmount
  }, []);

  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: "AIzaSyBhTdEUux9PdxqrzxkO9xRUMltDWIFHkSs", // Replace with actual API key
  });

  if (!isLoaded) {
    return <div>Loading Map...</div>;
  }

  return (
    <div style={{ textAlign: "center", fontFamily: "Arial, sans-serif" }}>
      <h1 style={{ color: "#176b87" }}>Patients Location Map</h1>

      {/* Display current date and time */}
      <div style={{ marginBottom: "20px", fontSize: "18px", color: "#176b87" }}>
        <strong>Date:</strong> {currentDateTime.toLocaleDateString()} <br />
        <strong>Time:</strong> {currentDateTime.toLocaleTimeString()}
      </div>

      {/* Google Map */}
      <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={10}>
        {patients.map((patient) => (
          <Marker
            key={patient.id}
            position={{
              lat: patient.latitude ,
              lng: patient.longitude 
            }}
            onClick={() => setSelectedPatient(patient)}
          />
        ))}

        {/* Info Window for selected patient */}
        {selectedPatient && (
          <InfoWindow
            position={{
              lat: selectedPatient.latitude ,
              lng: selectedPatient.longitude 
            }}
            onCloseClick={() => setSelectedPatient(null)}
          >
            <div>
              <h4>{selectedPatient.name}</h4>
            </div>
          </InfoWindow>
        )}
      </GoogleMap>
    </div>
  );
}
