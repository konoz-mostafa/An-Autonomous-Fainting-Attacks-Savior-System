import React, { useState } from "react";
import "./selectandchat.css";
import Chat from "./Chat";

const EmergencyService = () => {
  const [ambulances, setAmbulances] = useState([
    { id: 1, name: "Ambulance 1", status: "Available" },
    { id: 2, name: "Ambulance 2", status: "Available" },
    { id: 3, name: "Ambulance 3", status: "Busy" },
    { id: 4, name: "Ambulance 4", status: "Available" },
    { id: 5, name: "Ambulance 5", status: "Busy" },
  ]);

  const [selectedAmbulance, setSelectedAmbulance] = useState(null);
  const [messages, setMessages] = useState([]);
  const [chatInput, setChatInput] = useState("");

  const handleSelectAmbulance = (ambulance) => {
    if (ambulance.status === "Busy") {
      alert(`${ambulance.name} is already busy. Please select another ambulance.`);
      return;
    }

    if (selectedAmbulance) {
      setAmbulances((prevAmbulances) =>
        prevAmbulances.map((a) =>
          a.id === selectedAmbulance.id ? { ...a, status: "Available" } : a
        )
      );
    }

    setAmbulances((prevAmbulances) =>
      prevAmbulances.map((a) =>
        a.id === ambulance.id ? { ...a, status: "Busy" } : a
      )
    );

    setSelectedAmbulance(ambulance);

    setMessages([
      { sender: "System", text: `You are now chatting with ${ambulance.name}.` },
    ]);
  };

  
  
  

  return (
    <div>
      <header>
        <h1 style={{color:"#176b87"}}>Emergency Ambulance Service 🚑</h1>
      </header>
      <div className="container">
        {/* Left Panel (Ambulance List) */}
        <div className="ambulance-list">
          <h2 style={{ color: "#176b87" }}>Ambulances</h2>
          <ul>
            {ambulances.map((ambulance) => (
              <li
                key={ambulance.id}
                className={ambulance.status === "Available" ? "available" : "busy"}
              >
                <p>
                  <strong>{ambulance.name}</strong> - {ambulance.status}
                </p>
                {ambulance.status === "Available" && (
                  <button onClick={() => handleSelectAmbulance(ambulance)}>
                    Select
                  </button>
                )}
              </li>
            ))}
          </ul>
        </div>
    
        <div className="chat-container2">
          <Chat />
        </div>

        </div>
    
      {/* Footer */}
      <footer>
        <p>
          📞 For immediate help, call: <strong>123-456-789</strong>
        </p>
      </footer>
    </div>
  );
};

export default EmergencyService;