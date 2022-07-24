import React from 'react';
import { BrowserRouter } from "react-router-dom";
import NavigationBar from "./components/Navibar";
import Main from "./components/Main";
import ContactUs from "./components/ContactUs";

function App() {
  return (
    <div className="App" class='bg-dark'>
      <BrowserRouter>
        <NavigationBar/>
        <Main/>
        
        <ContactUs />
      </BrowserRouter >
    </div>
  );
}

export default App;
