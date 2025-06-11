import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
// import './AssignPatient.css';
import './login (1).css'

function Login() {
  const [inputs, setInputs] = useState({
    username: '',
    password: '',
  });

  const navigate = useNavigate(); // React Router hook for navigation

  const handleSubmit = async (event) => {
    event.preventDefault();

    const { username, password } = inputs;

    try {
      // إرسال بيانات تسجيل الدخول إلى الباك إند
      if (username === "admin" && password === "admin") {
        navigate('/admin'); // التنقل إلى صفحة AdminNavbar
      } else if (username === "hospital" && password === "hospital") {
        navigate('/hospital'); // التنقل إلى صفحة HospitalNavbar
      } else {
        alert("Invalid credentials");
      }
    } catch (error) {
      console.error('Error during login:', error);
      alert('An error occurred during login.');
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setInputs((prevInputs) => ({
      ...prevInputs,
      [name]: value,
    }));
  };

  return (
    <div className="login-container" >
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Username"
          name="username"
          value={inputs.username}
          onChange={handleChange}
        />
        <input
          type="password"
          placeholder="Password"
          name="password"
          value={inputs.password}
          onChange={handleChange}
        />
        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default Login;

