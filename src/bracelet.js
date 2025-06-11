import React, { useState, useEffect } from "react";
import "./Clock.css";

let currentStatus = "Your status";

const Clock = () => {
  const [time, setTime] = useState(new Date().toLocaleTimeString());
  const [isCritical, setIsCritical] = useState(false);
  const [bloodPressure, setBloodPressure] = useState(null); 

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTime(new Date().toLocaleTimeString());
    }, 1000);

    const fetchData = async () => {
      const data = await fetchCriticalData();  
      setIsCritical(data.isCritical); 
      setBloodPressure(data.bloodPressure); 

      if (data.isCritical) {
        setTimeout(() => {
          setIsCritical(false); 
        }, 60000); 
      }
    };

    fetchData();

    return () => clearInterval(intervalId);
  }, []);

  const fetchCriticalData = async () => {
    try {
      const response = await fetch("https://your-api-endpoint.com/critical-status");
      const data = await response.json(); 
      return data; 
    } catch (error) {
      console.error("Error fetching critical data:", error);
      return { isCritical: false, bloodPressure: null }; 
    }
  };

  return (
    <div className="home">
      <div className="clock">
        <div className="clock-face">
          <div className="clock-content">
            <p>{currentStatus}</p>
            {time}
            {isCritical && <h3 className="message">A notification has been sent to your relatives</h3>}
            {bloodPressure && (
              <div className="blood-pressure">
                <p>Blood Pressure: {bloodPressure.systolic}/{bloodPressure.diastolic} mmHg</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Clock;



// import React, { useState, useEffect } from "react";
// import "./Clock.css";

// let currentStatus = "Your status";

// const Clock = () => {
//   const [time, setTime] = useState(new Date().toLocaleTimeString());

//   useEffect(() => {
//     const intervalId = setInterval(() => {
//       setTime(new Date().toLocaleTimeString());
//     }, 1000);

//     return () => clearInterval(intervalId);
//   }, []);

//   return (
//     <div className="home"> 
//       <div className="clock">
//         <div className="clock-face">
//           <div className="clock-content">
//             <p>{currentStatus}</p>
//             {time}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Clock;


