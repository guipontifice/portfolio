import React from 'react'
import Navbar from './Components/Navbar'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './App.css'
import { Outlet } from 'react-router-dom';
import AboutMe from './Routes/AboutMe';
import Home from './Routes/Home';
import Projects from './Routes/Projects';
import Contact from './Routes/Contact';
import Skills from './Routes/Skills.jsx';
import Works from './Routes/Works.jsx';
import './i18n.js'

function App() {
  return (
    <div className='bg-page min-h-screen'>
      <div className='bg-page flex flex-col items-center w-full'>
        <Navbar />
        <Home id="portfolio" />
        <AboutMe id="AboutMe" />
        <Projects id="Projects" />
        <Skills id="Skills" />
        <Works id="Works" />
        <Contact id="Contact" />
        {/* <Routes>
          <Route path='/portfolio' element={<Home />}></Route>
          <Route path='/AboutMe' element={<AboutMe />}></Route>
          <Route path='/Projects' element={<Projects />}></Route>
          <Route path='/Contact' element={<Contact />}></Route>
        </Routes> */}
        {/* <Outlet /> */}
      </div>
    </div>
  )
}

export default App
