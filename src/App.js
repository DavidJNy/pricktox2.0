import React from 'react';
import { Routes, Route } from "react-router-dom";
import styled from 'styled-components';
import NavigationBar from "./components/Navibar";
import FrontPage from "./components/FrontPage";
import Contact from "./components/Contact";
import Footer from './components/Footer';
import Projects from './components/widgets/Projects';
import About from './components/About';

const MainPage = styled.div`
  background-color: #9400D3;
  color: #FFFFFF;
  display: grid;
`

function App() {
  return (
    <MainPage>
      <NavigationBar/>
        <Routes>
          <Route path='/' element={<FrontPage/>} />
          <Route path='/About' element={<About />} />
          <Route path='/Projects' element={<Projects/>} />
          <Route path='/Contact' element={<Contact/>} />
        </Routes>
      <Footer/>
    </MainPage>
  );
}

export default App;
