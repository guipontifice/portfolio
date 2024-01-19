import React from 'react'
import Navbar from './Components/Navbar'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './App.css'
import { Outlet } from 'react-router-dom';
import AboutMe from './Routes/AboutMe';
import Home from './Routes/Home';
import Projects from './Routes/Projects';
import Contact from './Routes/Contact';
import './i18n.js'

function App() {
  return (
    <div className='dark:bg-zinc900 bg-white min-h-screen'>
      <div className='dark:bg-zinc900 bg-white flex justify-center w-full'>
        <Navbar />
        <Routes>
          <Route path='/portfolio' element={<Home />}></Route>
          <Route path='/AboutMe' element={<AboutMe />}></Route>
          <Route path='/Projects' element={<Projects />}></Route>
          <Route path='/Contact' element={<Contact />}></Route>
        </Routes>
        <Outlet />
      </div>
    </div>
  )
}

export default App
