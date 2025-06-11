import React, { useState, useEffect } from 'react';

export default function Databasereport() {
  const [patients, setPatients] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  // Fetch patients data on component mount
  useEffect(() => {
    const fetchPatients = async () => {
      try {
        const response = await fetch('http://localhost:5000/api/hospital-patients');
        if (!response.ok) {
          throw new Error('Failed to fetch data');
        }
        const data = await response.json();
        console.log(data); // Check the fetched data in console
        setPatients(data.data); // Correcting the data access
      } catch (error) {
        console.error('Error fetching patients:', error);
        setError(error.message); // Set error message if fetch fails
      } finally {
        setLoading(false); // Data fetching is complete
      }
    };

    fetchPatients();
  }, []);

  return (
    <div>
      <div className="headtext">
        <h2>Patient Reports</h2>
      </div>
      <div className="dodo">
        {loading ? (
          <p>Loading...</p>
        ) : error ? (
          <p style={{ color: 'red' }}>Error: {error}</p>
        ) : patients.length > 0 ? (
          patients.map((data) => (
            <div key={data.patient_id} className="stylerep">
              <h3 style={{ textAlign: "center" }}>{data.name || 'Unknown'}</h3>
              <hr />
              <h6>Patient ID: {data.patient_id}</h6>
              <h6>Bracelet ID: {data.bracelet_id}</h6>

              {/* Check if sensor_data exists and is not empty */}
              {data.sensor_data && data.sensor_data.length > 0 ? (
                <div className="sensor-data">
                  <h6>Health Data:</h6>
                  {data.sensor_data.map((sensor, index) => (
                    <div key={index} className="sensor-entry">
                      <p>Heart Rate: {sensor.heart_rate} bpm</p>
                      <p>
                        Blood Pressure: {sensor.blood_pressure.systolic}/{sensor.blood_pressure.diastolic} mmHg
                      </p>
                      <p>Device ID: {sensor.device_id}</p>
                      <p>Timestamp: {new Date(sensor.timestamp).toLocaleString()}</p>
                      <hr />
                    </div>
                  ))}
                </div>
              ) : (
                <p>No health data available</p>
              )}
            </div>
          ))
        ) : (
          <p>No patients to display</p>
        )}
      </div>
    </div>
  );
}


// import React, { useState, useEffect } from 'react';

// export default function Databasereport(){
//     const [patients, setPatients] = useState([]);
//     useEffect(() => {
//         const fetchPatients = async () => {
//           const response = await fetch('');   //link api 
//           const data = await response.json();
//           setPatients(data);
//         };
    
//         fetchPatients();
//       }, []);
//     return(
//         <div>
//           <div className="headtext">
//           <h2> Patient Reports  </h2>
//           </div>
//           <div className="dodo">
//           {patients.length > 0 ? (
//         patients.map((patient) => (
//           <div key={patient.id} className="stylerep">
//            <h3 style={{ textAlign: "center" }}> {patient.name}</h3>
//               <hr />
//               <h6>Gender: {patient.gender}</h6>
//               <h6>Age: {patient.age}</h6>
//               <h6>Phone Number: {patient.phone}</h6>
//               <h6>Hospital: {patient.hospital}</h6>
//               <h6>Address: {patient.address}</h6>
//               <p>Health Condition: {patient.status}</p>
//           </div>
//         ))
//       ) : (
//         <p> No patients to display </p>
//       )}
//         </div>
//         </div>
//     )
// }

// import React, { useState, useEffect } from 'react';

// export default function Databasereport() {
//   const [patients, setPatients] = useState([]);

//   useEffect(() => {
//     const fetchPatients = async () => {
//       const response = await fetch('https://jsonplaceholder.typicode.com/users');
//       const data = await response.json();
//       setPatients(data);
//     };

//     fetchPatients();
//   }, []);

//   return (
//     <div>
//       <div className="headtext">
//         <h2>Patient Reports</h2>
//       </div>
//       <div className="dodo">
//         {patients.length > 0 ? (
//           patients.map((patient) => (
//             <div key={patient.id} className="stylerep">
//               <h3 style={{ textAlign: "center" }}>{patient.name}</h3>
//               <hr />
//               <h6>Gender: {patient.gender || 'N/A'}</h6>
//               <h6>Age: {patient.age || 'N/A'}</h6>
//               <h6>Phone Number: {patient.phone}</h6>
//               <h6>Hospital: {patient.company?.name || 'N/A'}</h6>
//               <h6>Address: {patient.address?.street || 'N/A'}</h6>
//               <p>Health Condition: {patient.status || 'N/A'}</p>
//             </div>
//           ))
//         ) : (
//           <p>No patients to display</p>
//         )}
//       </div>
//     </div>
//   );
// }

