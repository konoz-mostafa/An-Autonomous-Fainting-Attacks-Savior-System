import { useState, useEffect } from "react";

export default function AssignPatient() {
  const [fromInputs, setFormInput] = useState({
    name: "",
    age: "",
    email: "",
    patient_id: "",
    gender: "",
    current_location: "",
    prefered_hospital_id: "",
    bracelet_id: "",
    latitude: "",
    contact_number: "",
    longitude: "",
  });
  const [currentDateTime, setCurrentDateTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentDateTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault(); // Prevent page reload on form submit

    const patientData = {
      ...fromInputs,
    };

    fetch('', { // Replace with your API endpoint
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(patientData), 
    })
      .then(response => response.json())
      .then(data => {
        console.log("Patient assigned:", data); 
        alert("Patient assigned successfully!");
      })
      .catch((error) => {
        console.error("Error sending patient data:", error); 
      });
  };

  return (
    <div className="conAssign">
      <div className="headtext">
        <h3>Patient Management</h3>
      </div>
      <br /> <br />
      <div className="back">
        <div className="cont">
          <div className="pat">
            <br />
            <label>Patient Name: </label>
            <input
              type="text"
              value={fromInputs.name}
              onChange={(event) => {
                setFormInput({ ...fromInputs, name: event.target.value });
              }}
            />
            <br /> <br /> <br />
            <label>Patient Gender: </label>
            <input
              type="text"
              value={fromInputs.gender}
              onChange={(event) => {
                setFormInput({ ...fromInputs, gender: event.target.value });
              }}
            />
            <br /> <br /> <br />
            <label>Patient Age: </label>
            <input
              type="number"
              value={fromInputs.age}
              onChange={(event) => {
                setFormInput({ ...fromInputs, age: event.target.value });
              }}
            />
            <br /> <br /> <br />
            <label>Patient Email: </label>
            <input
              type="email"
              value={fromInputs.email}
              onChange={(event) => {
                setFormInput({ ...fromInputs, email: event.target.value });
              }}
            />
            <br /> <br /> <br />
            <label>Patient ID: </label>
            <input
              type="number"
              value={fromInputs.patient_id}
              onChange={(event) => {
                setFormInput({ ...fromInputs, patient_id: event.target.value });
              }}
            />
            <br /> <br /> <br />
            <label>Contact Number: </label>
            <input
              type="tel"
              value={fromInputs.contact_number}
              onChange={(event) => {
                setFormInput({ ...fromInputs, contact_number: event.target.value });
              }}
            />
            <br /> <br /> <br />
            
          </div>

          <div className="fam">
            <br /> 
            <label>Preferred Hospital ID: </label>
            <input
              type="number"
              value={fromInputs.prefered_hospital_id}
              onChange={(event) => {
                setFormInput({ ...fromInputs, prefered_hospital_id: event.target.value });
              }}
            />
            <br /> <br /> <br />
            <label>Bracelet ID: </label>
            <input
              type="number"
              value={fromInputs.bracelet_id}
              onChange={(event) => {
                setFormInput({ ...fromInputs, bracelet_id: event.target.value });
              }}
            />
            <br />
            <br />
            <label>Current Location: </label>
            <input
              type="text"
              value={fromInputs.current_location}
              onChange={(event) => {
                setFormInput({ ...fromInputs, current_location: event.target.value });
              }}
            />
            <br /> <br />
            <label>Latitude: </label>
            <input
              type="text" placeholder="Enter Latitude"
              value={fromInputs.latitude}
              onChange={(event) => {
                setFormInput({ ...fromInputs, latitude: event.target.value });
              }}
            />
            <br /> <br />
            <label>Longitude: </label>
            <input
              type="text" placeholder="Enter Longitude"
              value={fromInputs.longitude}
              onChange={(event) => {
                setFormInput({ ...fromInputs, longitude: event.target.value });
              }}
            />
            <br />
          </div>
        </div>
        <br />
        <button className="assignbutton" onClick={handleSubmit}>
          Assign
        </button>
      </div>
    </div>
  );
}


// import { useState, useEffect } from "react";
// import { GoogleMap, Marker, InfoWindow, useJsApiLoader } from "@react-google-maps/api";

// const containerStyle = {
//   width: "90%",
//   height: "300px",
// };
// const center = {
//   lat: 30.0544, // Latitude of Madinat Nasr (as an example)
//   lng: 31.3468, // Longitude of Madinat Nasr
// };

// export default function AssignPatient() {
//   const [fromInputs, setFormInput] = useState({
//     name: "",
//     age: "",
//     email: "",
//     patient_id: "",
//     gender:"",
//     current_location: "",
//     prefered_hospital_id: "",
//     bracelet_id:"",
//     latitude: "",
//     contact_number: "",
//     longitude: "",
//   });
//   const [currentDateTime, setCurrentDateTime] = useState(new Date());
//   const [selectedPatient, setSelectedPatient] = useState(null);
//   const [markers, setMarkers] = useState([]);
//   const [newPatient, setNewPatient] = useState({
//     name: "",
//     location: null,
//   });
//   const [patients, setPatients] = useState([]);

//   useEffect(() => {
//     const timer = setInterval(() => {
//       setCurrentDateTime(new Date());
//     }, 1000);

//     return () => clearInterval(timer);
//   }, []);

//   useEffect(() => {
//     fetch("") // Replace with your actual API endpoint
//       .then((response) => response.json())
//       .then((data) => {
//         setPatients(data);
//       })
//       .catch((error) => console.error("Error fetching patients:", error));
//   }, []);

//   const { isLoaded } = useJsApiLoader({
//     googleMapsApiKey: "AIzaSyBhTdEUux9PdxqrzxkO9xRUMltDWIFHkSs", // Replace with your API key
//   });

//   if (!isLoaded) {
//     return <div>Loading Map...</div>;
//   }

//   const handleMapClick = (event) => {
//     setNewPatient((prev) => ({
//       ...prev,
//       location: {
//         lat: event.latLng.lat(),
//         lng: event.latLng.lng(),
//       },
//     }));
//   };

//   const handleAssignToMap = () => {
//     if (newPatient.name && newPatient.location) {
//       setMarkers((current) => [...current, { ...newPatient }]);
//       setNewPatient({ name: "", location: null });
//     } else {
//       alert("Please select a location on the map and enter a name");
//     }
//   };

//   // دالة لإرسال البيانات إلى الباك إند
//   const handleSubmit = (event) => {
//     event.preventDefault(); // منع إعادة تحميل الصفحة عند إرسال الفورم

//     const patientData = {
//       ...fromInputs,
//       location: newPatient.location, // إضافة الموقع إلى البيانات
//     };

//     // استخدام Fetch لإرسال البيانات
//     fetch('', { // link api
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json',
//       },
//       body: JSON.stringify(patientData), 
//     })
//       .then(response => response.json())
//       .then(data => {
//         console.log("Patient assigned:", data); 
//         alert("Patient assigned successfully!");
//       })
//       .catch((error) => {
//         console.error("Error sending patient data:", error); 
//       });
//   };

//   return (
//     <div className="conAssign">
//       <div className="headtext">
//         <h3>Patient Management</h3>
//       </div>
//       <br /> <br />
//       <div className="back">
//         <div className="cont">
//           <div className="pat">
//             <br />
//             <label>patient name : </label>
//             <input
//               type="text"
//               value={fromInputs.name}
//               onChange={(event) => {
//                 setFormInput({ ...fromInputs, name: event.target.value });
//               }}
//             />
//             <br /> <br /> <br />
//             <label>patient gender : </label>
//             <input
//               type="gender"
//               value={fromInputs.gender}
//               onChange={(event) => {
//                 setFormInput({ ...fromInputs, gender: event.target.value });
//               }}
//             />
//             <br /> <br /> <br />
//             <label>age : </label>
//             <input
//               type="number"
//               value={fromInputs.age}
//               onChange={(event) => {
//                 setFormInput({ ...fromInputs, age: event.target.value });
//               }}
//             />
//             <br /> <br /> <br />
//             <label>e-mail : </label>
//             <input
//               type="email"
//               value={fromInputs.email}
//               onChange={(event) => {
//                 setFormInput({ ...fromInputs, email: event.target.value });
//               }}
//             />
//             <br /> <br /> <br />
//             <label>Patient id : </label>
//             <input
//               type="number"
//               value={fromInputs.patient_id}
//               onChange={(event) => {
//                 setFormInput({ ...fromInputs, patient_id: event.target.value });
//               }}
//             />
//             <br /> <br /> <br />
//             <label>contact number: </label>
//             <input
//               type="tel"
//               value={fromInputs.contact_number}
//               onChange={(event) => {
//                 setFormInput({ ...fromInputs, contact_number: event.target.value });
//               }}
//             />
//             <br /> <br /> <br /> <br />
//             <label>prefered hospital id: </label>
//             <input
//               type="number"
//               value={fromInputs.prefered_hospital_id}
//               onChange={(event) => {
//                 setFormInput({ ...fromInputs, prefered_hospital_id: event.target.value });
//               }}
//             />
//             <br /> <br /> <br />
//           </div>

//           <div className="fam">
//             <br />
//           <label>bracelet id : </label>
//             <input
//               type="number"
//               value={fromInputs.bracelet_id}
//               onChange={(event) => {
//                 setFormInput({ ...fromInputs, bracelet_id: event.target.value });
//               }}
//             />
//             <br />
            
//             <br />
//             <label>current location : </label>
//             <input
//               type="number"
//               value={fromInputs.current_location}
//               onChange={(event) => {
//                 setFormInput({ ...fromInputs, current_location: event.target.value });
//               }}
//             />
//             <br />
//             <br />
//             <label>latitude : </label>
//             <input
//               type="text" placeholder="Enter Latitude"
//               value={fromInputs.latitude}
//               onChange={(event) => {
//                 setFormInput({ ...fromInputs, latitude: event.target.value });
//               }}
//             />
//             <br /> <br />
            
//             <label>longitude : </label>
//             <input
//               type="text" placeholder="Enter Longitude"
//               value={fromInputs.longitude}
//               onChange={(event) => {
//                 setFormInput({ ...fromInputs, longitude: event.target.value });
//               }}
//             />
//             <br />
//             <br />
//             <div style={{ textAlign: "center", fontFamily: "Arial, sans-serif" }}>
//               <h2 style={{ color: "#176b87" }}>Patient Location on Map : </h2>

//               <div style={{ marginBottom: "20px" }}>
//                 <input
//                   type="text"
//                   placeholder="Enter patient name on map"
//                   value={newPatient.name}
//                   onChange={(e) =>
//                     setNewPatient((prev) => ({ ...prev, name: e.target.value }))
//                   }
//                   style={{
//                     padding: "10px",
//                     width: "165px",
//                     marginRight: "10px",
//                     border: "1px solid #ccc",
//                     borderRadius: "4px",
//                   }}
//                 />
//               </div>

//               <GoogleMap
//                 mapContainerStyle={containerStyle}
//                 center={center}
//                 zoom={10}
//                 onClick={handleMapClick}
//               >
//                 {patients.map((patient) => (
//                   <Marker
//                     key={patient.id}
//                     position={patient.location}
//                     onClick={() => setSelectedPatient(patient)}
//                   />
//                 ))}

//                 {markers.map((marker, index) => (
//                   <Marker
//                     key={index}
//                     position={marker.location}
//                     onClick={() => setSelectedPatient(marker)}
//                   />
//                 ))}

//                 {selectedPatient && (
//                   <InfoWindow
//                     position={selectedPatient.location}
//                     onCloseClick={() => setSelectedPatient(null)}
//                   >
//                     <div>
//                       <h4>{selectedPatient.name}</h4>
//                     </div>
//                   </InfoWindow>
//                 )}
//               </GoogleMap>
//             </div>
//           </div>
//         </div>
//         <br />
//         <button className="assignbutton" onClick={handleSubmit}>
//           Assign
//         </button>
//       </div>
//     </div>
//   );
// }
