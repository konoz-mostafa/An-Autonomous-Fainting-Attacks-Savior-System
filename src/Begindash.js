import React from "react";
import { NavLink } from "react-router-dom";
import Clock from "./bracelet";  // الساعة
import Login from "./AppLogin";  // صفحة تسجيل الدخول
import './Begindash.css';  // تنسيق الصفحة

// Navbar
function Navbar() {
  return (
    <nav className="navbar">
      <div className="left" style={{ fontSize: "20px", fontWeight: "bold" }}>
        An Autonomous Fainting Attacks Savior System
      </div>

      <ul className="right">
        <li>
          <NavLink to="/" className={({ isActive }) => (isActive ? "active" : "")}>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/login" className={({ isActive }) => (isActive ? "active" : "")}>
            Login
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

// صفحة BeginDash مع وجود Login و Clock
function Begindash() {
  return (
    <div className="App">
      <Navbar /> {/* عرض الـ Navbar في كل الصفحات */}
      <Clock /> {/* الساعة */}
    </div>
  );
}

export default Begindash;

