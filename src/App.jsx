import React from 'react'
import Navbar from './Components/Navbar'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './App.css'
import { Outlet } from 'react-router-dom';
import Footer from './Components/Footer';
import AboutMe from './Routes/AboutMe';
import Home from './Routes/Home';
import Projects from './Routes/Projects';
import Contact from './Routes/Contact';
import './i18n.js'
import { I18nextProvider } from 'react-i18next';
import i18next from './i18n.js';
function App() {
  return (
    <div className='bg-zinc900'>
        <div className='bg-zinc900 flex justify-center w-full'>
          <Navbar />
          <Routes>
            <Route path='/portfolio' element={<Home />}></Route>
            <Route path='/AboutMe' element={<AboutMe />}></Route>
            <Route path='/Projects' element={<Projects />}></Route>
            <Route path='/Contact' element={<Contact />}></Route>
          </Routes>
          <Outlet />
        </div>
        <Footer />
    </div>
  )
}

export default App
