import React from "react";
import { Routes, Route } from "react-router-dom";
import Adminnavbar from './Adminnavbar';
import Homeadmin from './Homeadmin';
import Adminmanage from './Adminmanage';
import HospitalMap from './Hospitalmap';
// import Mixassign from './Mixassign';
import ViewPatients from './ViewPatients';
import Assignbracelet from './Assignbracelet';


function AdminDashboard() {
  return (
    <div className="main-container" >
      <Adminnavbar />
      {/* قم بإضافة Routes هنا لتوجيه الصفحات الفرعية بشكل صحيح */}
      <Routes>
        {/* تأكد من استخدام path relative */}
        <Route path="/" element={<Homeadmin />} />
        <Route path="main" element={<Homeadmin />} />
        <Route path="assign" element={<Assignbracelet/>} />
        <Route path="show" element={<ViewPatients />} />
        <Route path="manage" element={<Adminmanage />} />
        <Route path="hospital" element={<HospitalMap />} />
      
      </Routes>
    </div>
  );
}

export default AdminDashboard;






// import logo from './logo.svg';
// import './AdminDash.css';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import './AssignPatient.css';
// import Databasereport from './Databasereport';
// import Mixassign from './Mixassign'
// import Hospitalnavbsr from './Hospitalnavbar';
// import Homehospital from './Homehospital';
// import AmbulanceMap from './AmbulanceMap';
// import ViewPatients from './ViewPatients';
// import Adminnavbar from './Adminnavbar';
// import Homeadmin from './Homeadmin';
// import Adminmanage from './Adminmanage';
// import HospitalMap from './Hospitalmap';

// function App() {
//   return (
//     <div className="App" >
//       <Router>
//       <Adminnavbar/>
//       <Routes>
//         <Route index element={<Homeadmin />} />
//         <Route path="/main" element={<Homeadmin />} />
//         <Route path="/assign" element={<Mixassign/>} />
//         <Route path="/show" element={<ViewPatients/>} />
//         <Route path="/manage" element={<Adminmanage/>} />
//         <Route path="/hospital" element={<HospitalMap/>} />
//       </Routes>
//     </Router>
//     </div> 
//   );
// } 

// export default App;


 /*<Router>
      <Hospitalnavbsr />
      <Routes>
        <Route index element={<Homehospital />} />
        <Route path="/home" element={<Homehospital />} />
        <Route path="/assign" element={<Mixassign />} />
        <Route path="/view" element={<div>View Hospitals and Ambulances Page</div>} />
        <Route path="/reports" element={<Databasereport />} />
      </Routes>
    </Router> */   

/* <Router>
      <Hospitalnavbsr />
      <Routes>
        <Route index element={<Homehospital />} />
        <Route path="/home" element={<Homehospital />} />
        <Route path="/assign" element={<Mixassign />} />
        <Route path="/see" element={<AmbulanceMap/>} />
        <Route path="/select" element={<div>select and chat with Ambulance</div>} />
        <Route path="/reports" element={<Databasereport />} />
      </Routes>
    </Router> */