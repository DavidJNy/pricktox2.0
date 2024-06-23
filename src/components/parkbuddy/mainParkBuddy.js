import React, { useState } from "react";
import MapApp from "./Map";
import ChatContainer from "./ChatContainer";
import LoginForm from "./Login";

function MainPark() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState("");
  const [selectedChatroomId, setSelectedChatroomId] = useState(null);

  const handleLogin = (username) => {
    setUsername(username);
    setIsLoggedIn(true);
  };

  const handleChatroomSelect = (chatroomId) => {
    setSelectedChatroomId(chatroomId);
  };

  
  return (
    <div id="Main" className="justify-content-center container">
      <div className="map">
        <MapApp onChatroomSelect={handleChatroomSelect} />
      </div>
      {isLoggedIn ? (
        <ChatContainer
          username={username}
          chatroomId={selectedChatroomId} // Pass the selected chatroom ID
        />
      ) : (
        <LoginForm onLogin={handleLogin} />
      )}
    </div>
  );
}

export default MainPark;
