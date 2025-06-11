import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import BeginDash from './Begindash';  // الصفحة الرئيسية التي تحتوي على اللوج ان والساعة
import AdminDashboard from './AdminDash';  // لوحة تحكم الإدارة
import HospitalDashboard from './App (3)';  // لوحة تحكم المستشفى
import Login from './AppLogin';  // صفحة تسجيل الدخول

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<BeginDash />} /> {/* الصفحة الرئيسية */}
        <Route path="/login" element={<Login />} /> {/* صفحة تسجيل الدخول */}
        <Route path="/admin/*" element={<AdminDashboard />} /> {/* لوحة تحكم الإدارة */}
        <Route path="/hospital/*" element={<HospitalDashboard />} /> {/* لوحة تحكم المستشفى */}
      </Routes>
    </Router>
  );
}

export default App;
