import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Hospitalnavbsr from './Hospitalnavbar';
import Homehospital from './Homehospital';
import AmbulanceMap from './AmbulanceMap';
import EmergencyService from './EmergencyService';
import Chat from './Chat';
import Databasereport from './Databasereport';
import Mixassign from './Mixassign';
function HospitalDashboard() {
  return (
    <div className="main-container">
      <Hospitalnavbsr />
      <Routes>
        <Route path="/" element={<Homehospital />} />
        <Route path="home" element={<Homehospital />} />
        <Route path="assign" element={<Mixassign/>} />
        <Route path="see" element={<AmbulanceMap />} />
        <Route path="select" element={<EmergencyService />} />
        <Route path="select" element={<Chat />} />
        <Route path="reports" element={<Databasereport />} />
      </Routes>
    </div>
  );
}

export default HospitalDashboard;




// import logo from './logo.svg';
// import './App (1).css';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import './AssignPatient.css';
// import Databasereport from './Databasereport';
// import Mixassign from './Mixassign'
// import Hospitalnavbsr from './Hospitalnavbar';
// import Homehospital from './Homehospital';
// import AmbulanceMap from './AmbulanceMap';
// import Chat from './Chat';
// import EmergencyService from './EmergencyService';



// function App() {
//   return (
//     <div className="App" >
//        <Router>
//       <Hospitalnavbsr />
//       <Routes>
//         <Route index element={<Homehospital />} />
//         <Route path="/home" element={<Homehospital />} />
//         <Route path="/assign" element={<Mixassign />} />
//         <Route path="/see" element={<AmbulanceMap/>} />
//         <Route path="/select" element={<EmergencyService/>}/>
//         <Route path="/select" element={<Chat />} />
//         <Route path="/reports" element={<Databasereport />} />
//       </Routes>
//     </Router>
//     </div> 
//   );
// } 
// export default App;


//  /*<Router>
//       <Hospitalnavbsr />
//       <Routes>
//         <Route index element={<Homehospital />} />
//         <Route path="/home" element={<Homehospital />} />
//         <Route path="/assign" element={<Mixassign />} />
//         <Route path="/view" element={<div>View Hospitals and Ambulances Page</div>} />
//         <Route path="/reports" element={<Databasereport />} />
//       </Routes>
//     </Router> */   

// /* <Router>
//       <Hospitalnavbsr />
//       <Routes>
//         <Route index element={<Homehospital />} />
//         <Route path="/home" element={<Homehospital />} />
//         <Route path="/assign" element={<Mixassign />} />
//         <Route path="/view" element={<Manage/>} />
//         <Route path="/reports" element={<Databasereport />} />
//       </Routes>
//     </Router> */




