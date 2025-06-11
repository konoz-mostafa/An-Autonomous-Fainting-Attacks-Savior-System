// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// // import './AssignPatient.css';
// import './Malak.css'
// function Login() {
//   const [inputs, setInputs] = useState({
//     username: '',
//     password: '',
//   });

//    const navigate = useNavigate(); // React Router hook for navigation

//   const handleSubmit = async (event) => {
//     event.preventDefault();

//     try {
//       // إرسال بيانات تسجيل الدخول إلى الباك إند
//       const response = await fetch('', { // عدل الرابط حسب سيرفرك
//         method: 'POST',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify(inputs),
//       });

//       const data = await response.json(); // افترض أن الباك إند يرجع { role: "admin" } أو { role: "hospital" }

//       if (response.ok) {
//         if (data.role === 'admin') {
//           navigate('/admin'); // التنقل إلى صفحة AdminNavbar
//         } else if (data.role === 'hospital') {
//           navigate('/hospital'); // التنقل إلى صفحة HospitalNavbar
//         } else {
//           alert('Invalid role received');
//         }
//       } else {
//         alert('Login failed: ' + data.message); // عرض رسالة خطأ
//       }
//     } catch (error) {
//       console.error('Error during login:', error);
//       alert('An error occurred during login.');
//     }
//   };

//   return (
//     <div className="App">
//       <div>
//         <form className="conInput" onSubmit={handleSubmit}>
//           <h1>Login</h1>

//           {/* Username Input */}
//           <div>
//             <label>Username:</label>
//             <br></br>
//             <input
//               type="text"
//               placeholder="Enter Username"
//               required
//               value={inputs.username}
//               onChange={(event) =>
//                 setInputs({ ...inputs, username: event.target.value })
//               }
//             />
//           </div>

//           <br />

//           {/* Password Input */}
//           <div>
//             <label>Password:</label>
//             <br></br>
//             <input
//               type="password"
//               placeholder="Enter Password"
//               required
//               value={inputs.password}
//               onChange={(event) =>
//                 setInputs({ ...inputs, password: event.target.value })
//               }
//             />
//           </div>

//           <br />

//           {/* Submit Button */}
//           <button type="submit">Submit</button>
//         </form>
//       </div>
//     </div>
//   );
// }

// export default Login;



import React, { useState } from "react";
import { Navigate } from "react-router-dom";
import "./login (1).css";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState(null);

  const handleLogin = (e) => {
    e.preventDefault();
    if (username === "admin" && password === "admin") {
      setRole("admin");
    } else if (username === "hospital" && password === "hospital") {
      setRole("hospital");
    } else {
      alert("Invalid credentials");
    }
  };

  // Handle redirection based on the role
  if (role === "admin") {
    return <Navigate to="/Admin" />;  // Redirect to Admin Dashboard
  } else if (role === "hospital") {
    return <Navigate to="/hospital" />;  // Redirect to Hospital Dashboard
  }

  return (
    <div className="login-container">
    <div >
      <h2>Login</h2>
      <form onSubmit={handleLogin}>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Login</button>
      </form>
    </div></div>
  );
}

export default Login;
