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
import i18next from 'i18next'
import { useTranslation, initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import HttpApi from 'i18next-http-backend'

i18next
  .use(initReactI18next)
  .use(LanguageDetector)
  .use(HttpApi)
  .init({
    supportedLngs: ['en', 'fr', 'es', 'pt'],
    fallbackLgn: "en",
    detection: {
      order: ['cookie', 'htmlTag', 'localStorage', 'path', 'subdomain'],
      caches: []
    },
    backend: {
      loadPath: '../public/assets/locales/{{lng}}/translation.json'
    },
  })

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
