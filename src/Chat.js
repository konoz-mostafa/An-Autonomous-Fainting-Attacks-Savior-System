// socket-frontend/src/Chat.js
import React, { useState, useEffect } from 'react';
import io from 'socket.io-client';

// Set up the Socket.IO connection to the backend server (running on port 5000)
const socket = io('http://localhost:5000');


const Chat = () => {
  const [role, setRole] = useState('hospital'); // Role: 'ambulance' or 'hospital'
  const [message, setMessage] = useState(''); // Message input
  const [messages, setMessages] = useState([]); // Array to store all received messages

  // Listen for incoming messages when the component mounts
  useEffect(() => {
    // Join the corresponding room based on the user's role
    socket.emit('joinRoom', role);

    // Listen for the messages from the backend (based on the role)
    socket.on('receiveMessage', (data) => {
      setMessages((prevMessages) => [...prevMessages, data]); // Add new messages to the list
    });

    // Cleanup the socket connection on component unmount
    return () => {
      socket.disconnect();
    };
  }, [role]);

  // Send a message to the backend
  const sendMessage = () => {
    if (message.trim()) {
      // Send the message along with the user's role (ambulance or hospital)
      socket.emit('sendMessage', { role, message });
  
      // Update the message list with the role as the sender
      setMessages((prevMessages) => [...prevMessages, { sender: role, message }]);
      
      // Clear the input field after sending the message
      setMessage('');
    }
  };
  

  return (
    <div className="chat-container">
     <h1 style={{ color: '#176b87' }}>
  {role === 'ambulance' ? 'Ambulance Chat' : 'Hospital Chat'}
</h1>


      {/* Role Selection */}
      <div className="role-buttons">
        <button onClick={() => setRole('ambulance')}>Ambulance</button>
        <button onClick={() => setRole('hospital')}>Hospital</button>
      </div>
      <p> select an ambulance to chat</p>
      {/* Message Area */}
      <div className="message-area">
        {messages.map((msg, index) => (
          <p key={index}>
            <strong>{msg.sender}:</strong> {msg.message}
          </p>
        ))}
      </div>

      {/* Input and Send Button */}
      <div className="input-container">
        <input
          type="text"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Type your message"
        />
        <button onClick={sendMessage}>Send</button>
      </div>
    </div>
  );
};

export default Chat;
