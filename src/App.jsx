import React from 'react'
import Navbar from './Components/Navbar'
import i18next from 'i18next'
import { useTranslation, initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import HttpApi from 'i18next-http-backend'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './App.css'
import { Outlet } from 'react-router-dom';
import Footer from './Components/Footer';


i18next
  .use(initReactI18next)
  .use(LanguageDetector)
  .use(HttpApi)
  .init({
    supportedLngs: ['en', 'fr', 'es', 'pt'],
    fallbackLgn: "en",
    detection: {
      order: ['cookie', 'htmlTag', 'localStorage', 'path', 'subdomain'],
      caches: ['cookie']
    },
    backend: {
      loadPath: './src/assets/locales/{{lng}}/translation.json'
    },
  })
function App() {
  return (
    <div className='bg-zinc900'>
      <div className='bg-zinc900 flex justify-center w-full'>
        <Navbar />
        <Outlet />
      </div>
      <Footer />
    </div>
  )
}

export default App
