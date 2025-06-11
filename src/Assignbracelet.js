import { useState, useEffect } from "react";


export default function Assignbracelet() {
  const [fromInputs, setFormInput] = useState({
    braceletid:"",
    patientid:"",
  });
  
  

  

  // دالة لإرسال البيانات إلى الباك إند
  const handleSubmit = (event) => {
    event.preventDefault(); // منع إعادة تحميل الصفحة عند إرسال الفورم

    const patientData = {
      ...fromInputs,
    };

    // استخدام Fetch لإرسال البيانات
    fetch('', { // link api
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(patientData), 
    })
      .then(response => response.json())
      .then(data => {
        console.log("Bracelet assigned to Patient:", data); 
        alert("Bracelet assigned successfully!");
      })
      .catch((error) => {
        console.error("Error sending data:", error); 
      });
  };

  return (
    <div className="conAssign">
      <div className="headtext">
        <h3>Assign Bracelet to Patient</h3>
      </div>
      <br /> <br />
      <div className="back">
        <div className="contb">
          <div className="pat">
            <br />
            <label>Bracelet ID: </label>
            <input
              type="number"
              value={fromInputs.braceletid}
              onChange={(event) => {
                setFormInput({ ...fromInputs, braceletid: event.target.value });
              }}
            />
            <br /> <br /> <br /> <br/>
            <label>Patient ID : </label>
            <input
              type="number"
              value={fromInputs.patientid}
              onChange={(event) => {
                setFormInput({ ...fromInputs, patientid: event.target.value });
              }}
            />
            <br /> <br /> <br />
            
          </div>
          </div>
        </div>
        <br />
        <button className="assignbuttonb" onClick={handleSubmit}>
          Assign
        </button>
      </div>
  );
}